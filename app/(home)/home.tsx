import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View, Platform } from "react-native";

const inputMaxLettersAuthorized = 3000;

const HomeScreen = () => {
    const [text, setText] = useState('')

    return <View style={styles.container}>
        <Text style={styles.text}>Describe your character</Text>
        <TextInput
            value={text}
            style={styles.input}
            placeholder="Describe your character..."
            multiline={true}
            maxLength={inputMaxLettersAuthorized}
            onChangeText={setText}
        />
        <Text style={styles.inputCounterText}>{text.length}/{inputMaxLettersAuthorized}</Text>
        <Pressable
            onPress={(e) => { /** TODO **/ }}
            android_ripple={{ color: '#FDC2AE', borderless: false, foreground: true }}
            style={({ pressed }) => [styles.button, pressed && styles.iosPressed]}>
            <Text style={styles.buttonText}>Submit character</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 500
    },
    buttonText: {
        fontSize: 15,
        color: "#000",
        fontWeight: 500
    },
    button: {
        backgroundColor: '#FDD2BF',
        borderWidth: 0,
        borderRadius: 20,
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        shadowColor: '#FDD2BF',
        elevation: 20,
        overflow: 'hidden'
    },
    iosPressed: {
        opacity: Platform.select({
            ios: 0.7
        })
    },
    input: {
        height: 180,
        width: '80%',
        marginHorizontal: 24,
        marginTop: 16,
        borderRadius: 20,
        borderWidth: 0,
        borderColor: '#FDD2BF',
        backgroundColor: '#FFF8FA',
        padding: 15,
        textAlignVertical: 'top',
        fontSize: 16,
        color: '#666',
        shadowColor: '#FDD2BF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 20,
    },
    inputCounterText: {
        fontSize: 12,
        fontWeight: 300,
        width: '80%',
        textAlign: 'right',
        paddingHorizontal: 12,
        marginTop: 4
    }
})

export default HomeScreen;