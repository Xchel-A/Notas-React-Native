import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Notas from './Notas';
import { useNavigation } from '@react-navigation/native';
import NotaImg from '../assets/notaimg.png';

export default function Home(props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={NotaImg} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Notas')}>
          <Text style={styles.buttonText}>Crear nueva nota</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#e64e81',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
