import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useLanguage } from './LanguageContext'; // Asegúrate de que la ruta sea correcta

const MenuCategories = ({ onSelectCategory }) => {
  const { language } = useLanguage();

  const getMenuCategories = () => {
    try {
      const menuData = require(`../idiomas/menu_${language}.json`);
      return menuData.categories || [];
    } catch (error) {
      console.error('Error loading menu data:', error);
      return [];
    }
  };

  const categories = getMenuCategories();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButton} onPress={() => onSelectCategory(item)}>
            <Text style={styles.categoryButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Estilos para el contenedor
  },
  categoryButton: {
    // Estilos para los botones de categoría
    padding: 10,
    margin: 5,
    backgroundColor: '#1a73e8',
    borderRadius: 5,
  },
  categoryButtonText: {
    // Estilos para el texto de los botones
    color: 'white',
    fontSize: 18,
  },
});

export default MenuCategories;
