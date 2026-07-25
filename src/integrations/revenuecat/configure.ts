import { Platform } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';

const REVENUECAT_API_KEY = 'test_VncDFGZbhDEpiZtqmyAoHPyxADX';

/**
 * Initializes the RevenueCat SDK.
 * Call this early in your app lifecycle (e.g., in App.js or a dedicated provider).
 */
export const configurePurchases = async () => {
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    Purchases.setLogLevel(LOG_LEVEL.DEBUG); // Set to DEBUG for development
    
    // Configure with API Key
    // Note: For real apps, you'd usually have different keys for iOS and Android
    Purchases.configure({ apiKey: REVENUECAT_API_KEY });
    
    console.log('RevenueCat initialized successfully');
  } else {
    console.warn('RevenueCat SDK is only supported on iOS and Android.');
  }
};

export default Purchases;
