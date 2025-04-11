import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const home = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Link href="/modal" style={styles.link}>
                Open modal
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    link: {
        paddingTop: 20,
        fontSize: 20,
        textDecorationLine: 'underline',
    }
});

export default home;