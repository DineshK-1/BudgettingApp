import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AccountsButton({ accountName, balance }) {
    return (
        <TouchableOpacity style={{
            gap: 3,
            padding: 10,
            alignSelf: "stretch",
            backgroundColor: "#D3D3D3",
            width: 150,
            paddingHorizontal: 10,
            marginHorizontal: 10,
            borderRadius: 10
        }}>
            <Text>{accountName}</Text>
            <Text>${balance}</Text>
        </TouchableOpacity>
    )
}