import React, { useState, useEffect } from 'react';
import { UserProfile, profileService } from '@/lib/profileService';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { User, Trash2, Search, Calendar, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

interface ProfileListProps {
    onSelectProfile: (profile: UserProfile) => void;
}

export const ProfileList: React.FC<ProfileListProps> = ({ onSelectProfile }) => {
    const [profiles, setProfiles] = useState<UserProfile[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { t } = useLanguage();

    useEffect(() => {
        loadProfiles();
    }, []);

    const loadProfiles = () => {
        const allProfiles = profileService.getProfiles();
        setProfiles(allProfiles);
    };

    const handleDelete = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        if (confirm(t('Are you sure you want to delete this profile?', 'क्या आप वाकई इस प्रोफ़ाइल को हटाना चाहते हैं?'))) {
            if (profileService.deleteProfile(id)) {
                toast.success(t('Profile deleted', 'प्रोफ़ाइल हटा दी गई'));
                loadProfiles();
            }
        }
    };

    const filteredProfiles = profiles.filter(profile =>
        profile.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder={t('Search profiles...', 'प्रोफ़ाइल खोजें...')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-muted/50 border-border/50 focus:border-primary focus:ring-gold/20"
                />
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProfiles.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-border/50 rounded-xl">
                        <User className="w-8 h-8 mx-auto mb-2 opacity-20" />
                        <p>{searchTerm ? t('No profiles found', 'कोई प्रोफ़ाइल नहीं मिली') : t('No profiles saved yet', 'अभी तक कोई प्रोफ़ाइल नहीं बचाई गई')}</p>
                    </div>
                ) : (
                    filteredProfiles.map((profile) => (
                        <Card
                            key={profile.id}
                            className="p-4 cursor-pointer hover:bg-primary/5 transition-colors border-border/50 group relative"
                            onClick={() => onSelectProfile(profile)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-foreground">{profile.name}</h3>
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Calendar className="w-3 h-3" />
                                                {new Date(profile.details.dateOfBirth).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Clock className="w-3 h-3" />
                                                {profile.details.timeOfBirth}
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground max-w-[150px] truncate">
                                                <MapPin className="w-3 h-3" />
                                                {profile.details.placeOfBirth.split(',').slice(0, 1)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={(e) => handleDelete(e, profile.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

