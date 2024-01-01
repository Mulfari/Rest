import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LanguageSelectionScreen from './modulos/LanguageSelectionScreen';
import MenuScreen from './modulos/MenuScreen';

const App = () => {
  const [language, setLanguage] = useState(null);

  const handleLanguageSelect = (selectedLanguage) => {
      setLanguage(selectedLanguage);
  };

  const handleBack = () => {
      setLanguage(null); // Esto hará que la app vuelva a mostrar la pantalla de selección de idiomas
  };

  if (!language) {
      return <LanguageSelectionScreen onSelectLanguage={handleLanguageSelect} />;
  }

  return (
      <MenuScreen selectedLanguage={language} onBack={handleBack} />
  );
};

export default App;
