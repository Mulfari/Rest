// Translation.js
import { currentLanguage } from '../App';
import esTranslations from '../idiomas/es.json';
import enTranslations from '../idiomas/en.json';

export function translate(key) {
  if (currentLanguage === 'es') {
    return esTranslations[key];
  } else {
    return enTranslations[key];
  }
}
