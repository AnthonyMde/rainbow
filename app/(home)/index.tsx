import { StyleSheet, Text, View } from "react-native";

export default function Home() {
    return <View style={styles.container}>
        <Text>Generator screen.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})