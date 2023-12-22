import { View, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AccountsButton from "../components/accountsButton";
import TransactionComponent from "../components/transaction";
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from "../constants/COLORS";

export default function WalletsPage() {
    return (
        <SafeAreaView style={{
            padding: 10,
            marginHorizontal: 5,
            gap: 10,
        }}>
            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 8 }}>
                <Text style={{ fontWeight: "600" }}>Accounts</Text>
                <ScrollView horizontal={true} style={{
                    paddingVertical: 10,
                    flexDirection: "row",
                }}>
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                    <AccountsButton accountName={"Test"} balance={200} />
                </ScrollView>
            </View>

            <View style={{ backgroundColor: "#fff", padding: 10, borderRadius: 8 }}>
                <Text style={{ fontWeight: "600" }}>Recent Transactions</Text>
                <View>
                    <TransactionComponent />
                </View>
            </View>

        </SafeAreaView>
    )
}