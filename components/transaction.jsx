import { View, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants/COLORS";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransactionComponent() {
    return (
        <SafeAreaView style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
        }}>
            <View>
                <Text style={{ fontWeight: "500" }}>Food & beverages</Text>
                <Text style={{ fontWeight: "500", color: colors.secondary, fontSize: 12 }}>Sun, Dec 12, 2021</Text>
            </View>
            <Text style={{ fontWeight: "500" }}>$500.00</Text>
        </SafeAreaView>
    )
}