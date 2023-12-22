import { SplashScreen, Stack, Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { SecureStore } from "expo-secure-store";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import LoginPage from "./(modals)/login";

export default function LayoutContext() {
    const clerkKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

    const tokenCache = {
        async getToken(key) {
            try {
                return SecureStore.getItemAsync(key)
            } catch (err) {
                return null;
            }
        },
        async saveToken(key, value) {
            try {
                return SecureStore.getItemAsync(key, value)
            } catch (err) {
                return null;
            }
        }
    }

    return <ClerkProvider publishableKey={clerkKey} tokenCache={tokenCache}>
        <Layout />
    </ClerkProvider>
}

function Layout() {

    const { isLoaded, isSignedIn } = useAuth();

    if (isLoaded && !isSignedIn) {
        return (
            <LoginPage />
        )
    }

    return (

        <Tabs screenOptions={{
            tabBarActiveTintColor: "#ff0000",
            headerShown: false,
        }}>
            <Tabs.Screen name="Wallets" options={{
                tabBarLabel: "Wallet",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="account-balance-wallet" size={size} color={color} />
            }} ></Tabs.Screen>
            <Tabs.Screen name="Profile" options={{
                tabBarLabel: "Account",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="account-circle" size={size} color={color} />
            }} />
        </Tabs>
    )
}