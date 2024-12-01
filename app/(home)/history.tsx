import { StyleSheet, Text, View } from "react-native";

const HistoryScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>History screen.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        color: "#000",
    },
})

export default HistoryScreen;