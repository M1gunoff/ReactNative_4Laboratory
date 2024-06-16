import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Это краткий экскурс по React Navigation.</Text>
      <Text style={styles.text}>Добро пожаловать!</Text>
      <TextInput
        placeholder="Your Name"
        onChangeText={text => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Email"
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <Button title="Update Profile" onPress={() => {}} style={styles.button} />
      <Text style={styles.textName}>Your Name: {name}</Text>
      <Text style={styles.text}>Your Email: {email}</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#077ba8c',
    padding: 5,
    fontSize: 16,
    color: '#fff',
  },
  textTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 50,
  },
  textName: {
    fontSize: 20,
    color: '#333',
  }
});