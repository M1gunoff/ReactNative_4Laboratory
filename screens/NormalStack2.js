import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NormalStack2() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>В данном проекте были рассмотрены:</Text>
      <Text style={styles.textBold}>Stack</Text>
      <Text style={styles.textBold}>Native Stack</Text>
      <Text style={styles.textBold}>Drawer</Text>
      <Text style={styles.textBold}>Tabs</Text>
      <Text style={styles.textEnd}>Спасибо!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "300",
    textAlign: "center"
  },
  textBold: {
    paddingHorizontal: 10,
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 2
  },
  textEnd: {
    fontSize: 30,
    marginTop: 30,
    fontWeight: "300",
  }
})