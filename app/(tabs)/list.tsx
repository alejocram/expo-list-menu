import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const list = () => {
    return (
        <View style={styles.container}>
            <Link href={'/list/1'}>Detail view One</Link>
            <Link href={'/list/2'}>Detail view Two</Link>
            <Link href={'/list/3'}>Detail view Three</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 10,
    },
});

export default list;