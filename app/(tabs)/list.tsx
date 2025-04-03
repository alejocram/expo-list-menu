import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const list = () => {
    return (
        <View style={styles.container}>
            <Text>List</Text>
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

export default list;