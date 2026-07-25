import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Alert, Platform } from 'react-native';
import Purchases, { 
  CustomerInfo, 
  PurchasesOffering, 
  PurchasesPackage,
  LOG_LEVEL 
} from 'react-native-purchases';
import { configurePurchases } from './configure';

interface PurchasesContextType {
  customerInfo: CustomerInfo | null;
  offerings: PurchasesOffering | null;
  isPro: boolean;
  loading: boolean;
  purchasePackage: (pkg: PurchasesPackage) => Promise<boolean>;
  restorePurchases: () => Promise<void>;
  presentPaywall: () => Promise<void>;
}

const PurchasesContext = createContext<PurchasesContextType | undefined>(undefined);

export const PurchasesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [offerings, setOfferings] = useState<PurchasesOffering | null>(null);
  const [isPro, setIsPro] = useState(false);
  const [loading, setLoading] = useState(true);

  const ENTITLEMENT_ID = 'Bhrigu Nandi Astrology Pro';

  useEffect(() => {
    const init = async () => {
      try {
        if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
          setLoading(false);
          return;
        }

        await configurePurchases();

        // Get initial customer info
        const info = await Purchases.getCustomerInfo();
        updateCustomerInfo(info);

        // Get current offerings
        const currentOfferings = await Purchases.getOfferings();
        if (currentOfferings.current) {
          setOfferings(currentOfferings.current);
        }

        // Set up listener for customer info updates
        Purchases.addCustomerInfoUpdateListener((info) => {
          updateCustomerInfo(info);
        });

      } catch (e) {
        console.error('RevenueCat Initialization Error:', e);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const updateCustomerInfo = (info: CustomerInfo) => {
    setCustomerInfo(info);
    // Check if the specific entitlement is active
    const proActive = !!info.entitlements.active[ENTITLEMENT_ID];
    setIsPro(proActive);
  };

  const purchasePackage = async (pkg: PurchasesPackage): Promise<boolean> => {
    try {
      const { customerInfo } = await Purchases.purchasePackage(pkg);
      updateCustomerInfo(customerInfo);
      return !!customerInfo.entitlements.active[ENTITLEMENT_ID];
    } catch (e: any) {
      if (!e.userCancelled) {
        Alert.alert('Error', e.message || 'An error occurred during purchase.');
      }
      return false;
    }
  };

  const restorePurchases = async () => {
    try {
      const info = await Purchases.restorePurchases();
      updateCustomerInfo(info);
      Alert.alert('Restored', 'Your purchases have been successfully restored.');
    } catch (e: any) {
      Alert.alert('Error', e.message || 'Failed to restore purchases.');
    }
  };

  const presentPaywall = async () => {
    try {
      // Note: react-native-purchases-ui is required for this
      const { RevenueCatUI } = require('react-native-purchases-ui');
      const result = await RevenueCatUI.presentPaywall({
        displayCloseButton: true,
      });
      console.log('Paywall closed with result:', result);
      
      // Refresh customer info after paywall closes
      const info = await Purchases.getCustomerInfo();
      updateCustomerInfo(info);
    } catch (e) {
      console.warn('Paywall presentation failed. Ensure react-native-purchases-ui is installed and configured.', e);
    }
  };

  return (
    <PurchasesContext.Provider value={{ 
      customerInfo, 
      offerings, 
      isPro, 
      loading, 
      purchasePackage, 
      restorePurchases,
      presentPaywall
    }}>
      {children}
    </PurchasesContext.Provider>
  );
};

export const usePurchases = () => {
  const context = useContext(PurchasesContext);
  if (context === undefined) {
    throw new Error('usePurchases must be used within a PurchasesProvider');
  }
  return context;
};
