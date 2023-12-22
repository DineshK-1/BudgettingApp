import { Stack } from "expo-router";
import { SecureStore } from "expo-secure-store";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
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
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    )
}