import React from 'react';
import { View, Text } from 'react-native';
import { translate } from './CurrentLanguage'; // Asegúrate de importar la función de traducción

const Menu = () => {
  return (
    <View>
      <Text>{translate('menu.title')}</Text>
      <Text>{translate('menu.item1')}</Text>
      <Text>{translate('menu.item2')}</Text>
    </View>
  );
};

export default Menu;
