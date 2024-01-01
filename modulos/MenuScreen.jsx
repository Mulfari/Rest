import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const MenuScreen = ({ selectedLanguage, onBack }) => {
    const getMenuData = () => {
        switch (selectedLanguage) {
            case 'Español':
                return require('../idiomas/menu_es.json');
            case 'English':
                return require('../idiomas/menu_en.json');
            case 'Deutsch':
                return require('../idiomas/menu_de.json');
            case 'Français':
                return require('../idiomas/menu_fr.json');
            default:
                return {};
        }
    };

    const menuData = getMenuData();

    return (
        <View style={styles.container}>
            <FlatList
                data={menuData.items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.menuItem}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemDescription}>{item.description}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                )}
            />

            <TouchableOpacity style={styles.button} onPress={onBack}>
                <Text style={styles.buttonText}>Volver</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
    },
    itemPrice: {
        fontSize: 14,
        color: 'green',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#1a73e8',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default MenuScreen;
                
