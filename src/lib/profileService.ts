import { toast } from "sonner";

export interface BirthDetails {
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
    latitude: number;
    longitude: number;
    gender: 'male' | 'female';
    mobileNo?: string;
}

export interface UserProfile {
    id: string;
    name: string;
    details: BirthDetails;
    lastUpdated: string;
}

const STORAGE_KEY = 'astrology_user_profiles';

export const profileService = {
    /**
     * Save or update a profile
     */
    saveProfile: (profileName: string, details: BirthDetails): UserProfile | null => {
        try {
            const profiles = profileService.getProfiles();
            const existingProfileIndex = profiles.findIndex(p => p.name.toLowerCase() === profileName.toLowerCase());

            const newProfile: UserProfile = {
                id: existingProfileIndex >= 0 ? profiles[existingProfileIndex].id : crypto.randomUUID(),
                name: profileName,
                details: { ...details, name: profileName },
                lastUpdated: new Date().toISOString()
            };

            if (existingProfileIndex >= 0) {
                profiles[existingProfileIndex] = newProfile;
            } else {
                profiles.push(newProfile);
            }

            localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
            return newProfile;
        } catch (error) {
            console.error('Error saving profile:', error);
            toast.error('Failed to save profile');
            return null;
        }
    },

    /**
     * Get all profiles sorted alphabetically by name
     */
    getProfiles: (): UserProfile[] => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return [];

            const profiles: UserProfile[] = JSON.parse(stored);
            return profiles.sort((a, b) => a.name.localeCompare(b.name));
        } catch (error) {
            console.error('Error getting profiles:', error);
            return [];
        }
    },

    /**
     * Delete a profile by ID
     */
    deleteProfile: (id: string): boolean => {
        try {
            const profiles = profileService.getProfiles();
            const filtered = profiles.filter(p => p.id !== id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
            return true;
        } catch (error) {
            console.error('Error deleting profile:', error);
            toast.error('Failed to delete profile');
            return false;
        }
    },

    /**
     * Get a single profile by name
     */
    getProfileByName: (name: string): UserProfile | undefined => {
        const profiles = profileService.getProfiles();
        return profiles.find(p => p.name.toLowerCase() === name.toLowerCase());
    }
};
