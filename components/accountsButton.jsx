import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AccountsButton({ accountName, balance }) {
    return (
        <TouchableOpacity style={{
            gap: 10,
            padding: 15,
            alignSelf: "stretch",
            backgroundColor: "#fff",
            width: 300,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            borderRadius: 10
        }}>
            <Text style={{
                fontSize: 24,
                fontWeight: 600,
                color: "#42154E",
            }}>${balance}</Text>
            <View style={{
                backgroundColor: "#8F00FF60",
                fontSize: 20,
                padding: 15,
                borderRadius: 15,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style={{ color: "#8F00FF", fontWeight: 500 }}>{accountName}</Text>
                <Text style={{ color: "#8F00FF", fontWeight: 500 }}>$USD</Text>
            </View>
        </TouchableOpacity>
    )
}