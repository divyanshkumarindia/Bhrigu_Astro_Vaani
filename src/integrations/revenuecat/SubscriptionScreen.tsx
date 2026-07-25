import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, Alert } from 'react-native';
import { usePurchases } from './PurchasesProvider';

export const SubscriptionScreen: React.FC = () => {
  const { offerings, isPro, loading, purchasePackage, restorePurchases, presentPaywall } = usePurchases();

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF8C00" />
      </View>
    );
  }

  if (isPro) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>You are a Pro Member! 🌟</Text>
        <Text style={styles.subtitle}>Thank you for supporting Bhrigu Nandi Astrology.</Text>
        
        <TouchableOpacity 
          style={styles.manageButton} 
          onPress={() => {
            // How to present Customer Center (requires react-native-purchases-ui)
            try {
              const { RevenueCatUI } = require('react-native-purchases-ui');
              RevenueCatUI.presentCustomerCenter();
            } catch (e) {
              Alert.alert('Customer Center', 'This feature is currently available on mobile devices.');
            }
          }}
        >
          <Text style={styles.buttonText}>Manage Subscription</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Unlock Premium Features</Text>
      <Text style={styles.subtitle}>Get the most out of Bhrigu Nandi Astrology Pro</Text>

      {/* Option 1: Present RevenueCat Paywall (Highly Recommended) */}
      <TouchableOpacity style={styles.paywallButton} onPress={presentPaywall}>
        <Text style={styles.buttonText}>View Subscription Options</Text>
      </TouchableOpacity>

      <Text style={styles.divider}>OR</Text>

      {/* Option 2: Custom UI using Offerings */}
      {offerings?.availablePackages.map((pkg) => (
        <TouchableOpacity 
          key={pkg.identifier} 
          style={styles.packageCard} 
          onPress={() => purchasePackage(pkg)}
        >
          <View>
            <Text style={styles.packageName}>{pkg.product.title}</Text>
            <Text style={styles.packagePrice}>{pkg.product.priceString}</Text>
          </View>
          <Text style={styles.buyText}>Subscribe</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.restoreButton} onPress={restorePurchases}>
        <Text style={styles.restoreText}>Restore Previous Purchases</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#FFF9F5',
    flexGrow: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  paywallButton: {
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    elevation: 3,
  },
  manageButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    marginVertical: 20,
    color: '#999',
    fontWeight: 'bold',
  },
  packageCard: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFE4D1',
    elevation: 2,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  packagePrice: {
    fontSize: 14,
    color: '#FF8C00',
    marginTop: 4,
  },
  buyText: {
    color: '#FF8C00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  restoreButton: {
    marginTop: 30,
    padding: 10,
  },
  restoreText: {
    color: '#666',
    textDecorationLine: 'underline',
  }
});
