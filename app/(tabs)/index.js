import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TransactionComponent from "../../components/transaction";
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountsButton from "../../components/accountsButton";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../constants/COLORS";

export default function WalletsPage() {
    return (
        <>
            <TouchableOpacity style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: '#ee6e73',
                position: 'absolute',
                bottom: 10,
                right: 10,
                alignItems: "center",
                justifyContent: "center"
            }} >
                <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>

            <SafeAreaView style={{
                padding: 10,
                marginHorizontal: 5,
                gap: 10,
            }}>
                <Text style={{ fontWeight: "600", fontSize: 18 }}>Accounts</Text>
                <View>

                    <ScrollView horizontal={true} style={{
                        paddingVertical: 10,
                        flexDirection: "row",
                    }}>
                        <AccountsButton accountName={"Personal Funds"} balance={200} />
                        <AccountsButton accountName={"ICICI Bank"} balance={200} />
                        <AccountsButton accountName={"Cash"} balance={200} />
                        <AccountsButton accountName={"Test Account"} balance={200} />
                        <AccountsButton accountName={"Test"} balance={200} />
                        <AccountsButton accountName={"Test"} balance={200} />
                        <AccountsButton accountName={"Test"} balance={200} />
                    </ScrollView>
                </View>

                <Text style={{ fontWeight: "600", fontSize: 18 }}>Recent Transactions</Text>
                <View style={{ backgroundColor: "#fff", paddingHorizontal: 10, borderRadius: 8 }}>

                    <View>
                        <TransactionComponent />
                        <TransactionComponent />
                    </View>
                </View>

            </SafeAreaView>
        </>
    )
}