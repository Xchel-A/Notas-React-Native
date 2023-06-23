import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';

const NoteCard = ({ note }) => {
    return (
      <View style={[styles.card, { backgroundColor: note.color }]}>
        <Text style={styles.cardTitle}>{note.title}</Text>
        <Text style={styles.cardContent}>{note.content}</Text>
      </View>
    );
  };
  export default NoteCard;

  const styles = StyleSheet.create({
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
  })