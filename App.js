import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Button } from '@rneui/themed';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Selecciona un idioma:</Text>
      <View style={styles.row}>
        <Card containerStyle={styles.card}>
          <Text style={styles.languageText}>Inglés</Text>
          <Image source={require('./images/english.png')} style={styles.image} />
          <Button title="Seleccionar" buttonStyle={styles.button} onPress={() => seleccionarIdioma('Inglés')} />
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.languageText}>Español</Text>
          <Image source={require('./images/spanish.png')} style={styles.image} />
          <Button title="Seleccionar" buttonStyle={styles.button} onPress={() => seleccionarIdioma('Español')} />
        </Card>
      </View>
      <View style={styles.row}>
        <Card containerStyle={styles.card}>
          <Text style={styles.languageText}>Francés</Text>
          <Image source={require('./images/french.png')} style={styles.image} />
          <Button title="Seleccionar" buttonStyle={styles.button} onPress={() => seleccionarIdioma('Francés')} />
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.languageText}>Alemán</Text>
          <Image source={require('./images/german.png')} style={styles.image} />
          <Button title="Seleccionar" buttonStyle={styles.button} onPress={() => seleccionarIdioma('Alemán')} />
        </Card>
      </View>
    </View>
  );
}

const seleccionarIdioma = (idioma) => {
  // Aquí puedes realizar acciones adicionales cuando se selecciona un idioma, como cambiar la configuración del idioma en la aplicación.
  alert(`Has seleccionado ${idioma}`);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Distribuye las tarjetas de manera uniforme en el espacio disponible
  },
  card: {
    width: '40%', // Elige el ancho que desees para las tarjetas
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  languageText: {
    fontSize: 18, // Tamaño de fuente ajustado
    textAlign: 'center', // Texto centrado
  },
  headerText: {
    fontSize: 24,
  },
  button: {
    alignSelf: 'stretch',
  },
});
