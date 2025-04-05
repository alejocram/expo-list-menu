import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

const detailPage = () => {
    const { id } = useLocalSearchParams(); // Extract the dynamic route parameter

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: `Details #${id}` }} />

            <Text>Detail View {id}</Text>
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
});

export default detailPage;