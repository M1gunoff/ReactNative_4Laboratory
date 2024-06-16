import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Чем Stack отличается от Native Stack?</Text>
      <Text style={styles.text}><Text style={styles.textBold}>Stack Navigator </Text> - это JavaScript-реализация навигатора, который использует свой собственный стек для управления переходами между экранами.</Text>
      <Text style={styles.text}><Text style={styles.textBold}>Native Stack Navigator</Text> - это нативный навигатор, который использует нативные API UINavigationController на iOS и Fragment на Android для управления переходами между экранами. Он обеспечивает более высокую производительность и имеет нативные функции, такие как большой заголовок. Однако он может быть менее настраиваемым, чем Stack Navigator, в зависимости от ваших потребностей</Text>
      <Button title="Нажмите на кнопку" onPress={() => navigation.navigate("About")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        textAlign: "center",
    },
    text: {
        fontSize: 22,
        marginBottom: 10,
        paddingHorizontal: 11,
    },
    textBold: {
        fontWeight: "500",
    }
})