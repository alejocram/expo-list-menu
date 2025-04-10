import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const data = [
    { id: '1', title: 'Item One', description: 'Detail view one' },
    { id: '2', title: 'Item Two', description: 'Detail view two' },
    { id: '3', title: 'Item Three', description: 'Detail view three' },
  ];

const list = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Button 
                title="Add" 
                onPress={() => router.push({ pathname: '/add/'}) }
            />
            <FlashList
                data={data}
                estimatedItemSize={60}
                renderItem={({ item }) => (
                    <Pressable 
                    onPress={() => router.push({ pathname: '/list/' + item.id, params: { id: item.id, title: item.title, description: item.description } })}
                    style={styles.itemList}
                    >
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12 }}>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemList: {
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
});

export default list;