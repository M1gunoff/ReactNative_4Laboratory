import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>На этой странице реализован Stack Navigation из React Native.</Text>
      <Text style={styles.textComment}>На следующей странице Tabs тоже реализован Stack, но импортируемый из React. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 23,
        marginBottom: 16,
        textAlign: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    textComment: {
        fontSize: 23,
        textAlign: "center",
        paddingHorizontal: 10,
        color: "#8e979e",
    }
})