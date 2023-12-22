import { SignedIn, useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, globalStyles } from "../constants/COLORS";

export default function ProfilePage() {
    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded) return;

    const SignOut = () => {
        const { isLoaded, signOut } = useAuth();
        if (!isLoaded) {
            return null;
        }
        return (
            <View>
                <TouchableOpacity style={globalStyles.buttonStd}><Text style={{ color: "#fff", textAlign: "center" }} onPress={signOut}>Sign out</Text></TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ paddingHorizontal: 10 }}>
            <SignedIn>
                <View style={{ gap: 15 }}>
                    <Text style={{ color: "#000", fontSize: 20, fontWeight: "600", marginVertical: 20 }}>Hey {user?.username},</Text>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontWeight: 600, fontSize: 14 }}>Email Address</Text>
                        <TextInput
                            style={{
                                borderColor: colors.secondary,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 10
                            }}
                            value={user.primaryEmailAddress.emailAddress}
                            editable={false}

                        />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontWeight: 600, fontSize: 14 }}>Phone</Text>
                        <TextInput
                            style={{
                                borderColor: colors.secondary,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 10
                            }}
                            value={user.primaryPhoneNumber.phoneNumber}
                            editable={false}

                        />
                    </View>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontWeight: 600, fontSize: 14 }}>User Since</Text>
                        <TextInput
                            style={{
                                borderColor: colors.secondary,
                                padding: 10,
                                borderWidth: 1,
                                borderRadius: 10
                            }}
                            value={new Date(user.createdAt).toLocaleDateString()}
                            editable={false}

                        />
                    </View>
                    <View>
                        <SignOut />

                    </View>
                </View>
            </SignedIn>
        </SafeAreaView>
    )
}