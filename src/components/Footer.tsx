import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default function Footer() {
    const [result, setResult] = useState(null);
    const _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://example.com');
        setResult(result);
    };
    return (
        <View style={{
            height: 28,
            backgroundColor: 'thistle',
            flexDirection: "row",
            justifyContent: "center"
        }}>
            <Pressable style={styles.button} onPress={_handlePressButtonAsync} >
                <Text style={styles.text}>Terms of Service </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={_handlePressButtonAsync} >
                <Text style={styles.text}>Privacy Policy</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 4,
        elevation: 3,
    },
    text: {
        fontSize: 14,
        lineHeight: 18,
        letterSpacing: 0.25,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
});



