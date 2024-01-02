import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useLanguage } from './LanguageContext'; // Asegúrate de que la ruta sea correcta

const MenuScreen = ({ onBack }) => {
    const { language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getMenuData = () => {
        try {
            const menuData = require(`../idiomas/menu_${language}.json`);
            return menuData;
        } catch (error) {
            console.error('Error loading menu data:', error);
            return { categories: [], items: [] };
        }
    };

    const menuData = getMenuData();
    const categories = menuData.categories || [];

    const filterMenuItems = () => {
        if (!selectedCategory) return menuData.items;
        return menuData.items.filter(item => item.category === selectedCategory);
    };

    return (
        <View style={styles.container}>
            {/* Botón Volver */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={onBack}>
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
            </View>

            {/* Contenido del Menú */}
            <View style={styles.menuContent}>
                {/* Categorías */}
                <View style={styles.categoriesColumn}>
                    <FlatList
                        data={categories}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.categoryButton}
                                onPress={() => setSelectedCategory(item)}
                            >
                                <Text style={styles.categoryButtonText}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Elementos del Menú */}
                <View style={styles.itemsColumn}>
                    <FlatList
                        data={filterMenuItems()}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.menuItem}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>${item.price}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        paddingTop: 20,
        paddingLeft: 10,
    },
    backButton: {
        backgroundColor: '#1a73e8',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    menuContent: {
        flex: 1,
        flexDirection: 'row',
    },
    categoriesColumn: {
        flex: 1,
        // Ajusta estos estilos según tus necesidades
    },
    itemsColumn: {
        flex: 2,
        // Ajusta estos estilos según tus necesidades
    },
    menuItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        // Ajusta estos estilos según tus necesidades
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
    categoryButton: {
        margin: 5,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    categoryButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default MenuScreen;
