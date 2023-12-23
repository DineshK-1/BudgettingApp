import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../../constants/COLORS";

export default function LoginPage() {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState("test@gmail.com");
    const [password, setPassword] = React.useState("test");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });

            await setActive({ session: completeSignIn.createdSessionId });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={{
            padding: 10,
            justifyContent: "center",
            flex: 1
        }}>
            <View style={{
                gap: 15
            }}>
                <Text style={{
                    fontWeight: 600,
                    fontSize: 18,
                    textAlign: "center",
                    paddingVertical: 10
                }}>Login to your account</Text>
                <View>
                    <TextInput
                        style={{
                            borderColor: colors.secondary,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10
                        }}
                        autoCapitalize="none"
                        value={emailAddress}
                        placeholder="Use test@gmail.com"
                        onChangeText={(email) => setEmailAddress(email)}
                    />
                </View>

                <View>
                    <TextInput
                        style={{
                            borderColor: colors.secondary,
                            padding: 10,
                            borderWidth: 1,
                            borderRadius: 10
                        }}
                        value={password}
                        placeholder="Use test"
                        placeholderTextColor="#000"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                <TouchableOpacity style={{
                    backgroundColor: colors.primary,
                    color: "#fff",
                    padding: 15,
                    borderRadius: 10,
                }} onPress={onSignInPress}>
                    <Text style={{
                        textAlign: "center",
                        color: "#fff"
                    }}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}