import { SplashScreen, Stack, Tabs } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../constants/COLORS";

export default function Layout() {
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