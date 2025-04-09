import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, Link } from 'expo-router';

const NotFound = () => {
    return (
        <>
        <Stack.Screen options={{ title: "Oops! Not Found"}} />
        <View style={styles.container}>
            <Text style={styles.text}>Page Not Found</Text>
            <Link href="/" style={styles.button}>
                Go back to the Home!
            </Link>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#000"
    }
});

export default NotFound;