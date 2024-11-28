import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Generator screen.</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        color: "#000",
    },
})

export default HomeScreen;