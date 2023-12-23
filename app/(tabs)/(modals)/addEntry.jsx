import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from "../../../constants/COLORS";

export default function HomePage() {
    return (
        <View style={{
            gap: 10,
            padding: 10
        }}>
            <TextInput style={globalStyles.inputStd} />
            <TextInput style={globalStyles.inputStd} />
            <TextInput style={globalStyles.inputStd} />
            <TextInput style={globalStyles.inputStd} />
            <TextInput style={globalStyles.inputStd} />

        </View>
    )
}