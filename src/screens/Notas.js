import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';
import NoteCard from '../components/NoteCard'

export default function Notas(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('#f2f2f2');
  const [notes, setNotes] = useState([]);

  const handleColorChange = (selectedColor) => {
    if (title === '' || content === '') {
      Alert.alert('Campos vacíos', 'Por favor, completa todos los campos antes de guardar la nota.');
      return;
    }

    const note = {
      title: title,
      content: content,
      color: selectedColor,
    };
    setNotes([...notes, note]);
    setTitle('');
    setContent('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Crear nota</Text>
      <View style={styles.inputCont}>
        <TextInput
          placeholder="Titulo"
          value={title}
          onChangeText={(text) => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Contenido"
          value={content}
          onChangeText={(text) => setContent(text)}
          multiline
          style={styles.input}
        />
      </View>
      <Text style={styles.mynotetitle}>Seleccione un color para guardar:</Text>
      <View style={styles.colorPicker}>
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#affbff' }]}
          onPress={() => handleColorChange('#affbff')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#f8dac2' }]}
          onPress={() => handleColorChange('#f8dac2')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#f2a297' }]}
          onPress={() => handleColorChange('#f2a297')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#f4436f' }]}
          onPress={() => handleColorChange('#f4436f')}
        />
        <TouchableOpacity
          style={[styles.colorOption, { backgroundColor: '#ca1444' }]}
          onPress={() => handleColorChange('#ca1444')}
        />
        
      </View>
      <Text style={styles.mynotetitle}>Mis notas</Text>
      <FlatList
        data={notes}
        renderItem={({ item }) => <NoteCard note={item} />}
        keyExtractor={(item, index) => index.toString()}
        style={styles.FlatListSty}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    margin: 10
  },
  mynotetitle: {
    marginBottom: 5
  },
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    backgroundColor: '#f2f2f2'
  },
  inputCont: {
    backgroundColor: '#affbff',
    width: 250,
    height: 200,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15
  },
  input: {
    height: 50,
    color: '#000',
    margin: 10,
    borderRadius: 50
  },
  colorPicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5
  },
  card: {
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 250,
    height: 200,
    marginHorizontal: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  cardContent: {
    fontSize: 16,
  },
  FlatListSty: {
    borderRadius: 15
  }
});
