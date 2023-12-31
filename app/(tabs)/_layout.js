import { SplashScreen, Stack, Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from "@clerk/clerk-expo";
import LoginPage from "../(modals)/login";
import { colors } from "../../constants/COLORS";

export default function Layout() {

    const { isLoaded, isSignedIn } = useAuth();

    if (isLoaded && !isSignedIn) {
        return (
            <LoginPage />
        )
    }

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{
                tabBarLabel: "Wallet",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="account-balance-wallet" size={size} color={color} />
            }} ></Tabs.Screen>
            <Tabs.Screen name="Profile" options={{
                tabBarLabel: "Account",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="account-circle" size={size} color={color} />
            }} />
            <Stack.Screen name="(modals)/addEntry" options={{
                href: null,
                presentation: "modal",
                headerShown: true,
                headerTitle: "Add a transaction",
                headerTitleAlign: "center"
            }} />
        </Tabs>
    )
}