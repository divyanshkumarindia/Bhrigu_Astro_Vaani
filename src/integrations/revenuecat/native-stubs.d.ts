/**
 * NATIVE STUBS
 * These declarations allow the TypeScript compiler to recognize React Native 
 * and RevenueCat modules in a Web/Vite project. 
 * This resolves the "Cannot find module" errors in your IDE.
 */

declare module 'react-native' {
  export const Platform: {
    OS: 'ios' | 'android' | 'windows' | 'macos' | 'web';
  };
  export const Alert: {
    alert: (title: string, message?: string) => void;
  };
  export const View: any;
  export const Text: any;
  export const TouchableOpacity: any;
  export const ActivityIndicator: any;
  export const StyleSheet: {
    create: (styles: any) => any;
  };
  export const ScrollView: any;
}

declare module 'react-native-purchases' {
  export enum LOG_LEVEL {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
  }
  
  export interface CustomerInfo {
    entitlements: {
      active: { [key: string]: any };
      all: { [key: string]: any };
    };
  }

  export interface PurchasesPackage {
    identifier: string;
    product: {
      title: string;
      priceString: string;
    };
  }

  export interface PurchasesOffering {
    availablePackages: PurchasesPackage[];
    current: any;
  }

  const Purchases: {
    configure: (config: { apiKey: string }) => void;
    setLogLevel: (level: LOG_LEVEL) => void;
    getCustomerInfo: () => Promise<CustomerInfo>;
    getOfferings: () => Promise<{ current: PurchasesOffering | null }>;
    purchasePackage: (pkg: PurchasesPackage) => Promise<{ customerInfo: CustomerInfo }>;
    restorePurchases: () => Promise<CustomerInfo>;
    addCustomerInfoUpdateListener: (callback: (info: CustomerInfo) => void) => void;
  };

  export default Purchases;
}

declare module 'react-native-purchases-ui' {
  export const RevenueCatUI: {
    presentPaywall: (options?: any) => Promise<any>;
    presentCustomerCenter: () => Promise<any>;
  };
}
