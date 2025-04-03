import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <Redirect href={'/home'} />
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

export default App;