import React from 'react';
import { LanguageProvider, useLanguage } from './modulos/LanguageContext'; // Asegúrate de que la ruta sea correcta
import LanguageSelectionScreen from './modulos/LanguageSelectionScreen';
import MenuScreen from './modulos/MenuScreen';

const MainApp = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleBack = () => {
    setLanguage(null); // Esto hará que la app vuelva a mostrar la pantalla de selección de idiomas
  };

  if (!language) {
    return <LanguageSelectionScreen onSelectLanguage={handleLanguageSelect} />;
  }

  return <MenuScreen selectedLanguage={language} onBack={handleBack} />;
};

const App = () => {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
};

export default App;
