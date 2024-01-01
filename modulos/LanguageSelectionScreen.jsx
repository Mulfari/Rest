import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LanguageSelectionScreen = ({ onSelectLanguage }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => onSelectLanguage('Español')}>
                <Text style={styles.buttonText}>Español</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => onSelectLanguage('English')}>
                <Text style={styles.buttonText}>English</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => onSelectLanguage('Deutsch')}>
                <Text style={styles.buttonText}>Deutsch</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => onSelectLanguage('Français')}>
                <Text style={styles.buttonText}>Français</Text>
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
    button: {
        backgroundColor: '#1a73e8',
        padding: 15,
        borderRadius: 5,
        margin: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default LanguageSelectionScreen;
