import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function NormalStack({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>А что это за панель внизу?</Text>
      <Text style={styles.text}><Text style={styles.bold}>TabNavigation</Text> в React Native представляет собой простую панель вкладок в нижней части экрана, которая позволяет переключаться между различными маршрутами. Этот компонент обеспечивает ленивую инициализацию маршрутов, что означает, что компоненты их экранов не инициализируются до тех пор, пока маршрут не будет выбран.</Text> 
      <Button title="Нажмите на кнопку" onPress={() => navigation.navigate("Note")}/>
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
    textTitle: {
      fontSize: 30,
      fontWeight: "500",
      marginBottom: 15,
    },
    text: {
      fontSize: 20,
      paddingHorizontal: 11,
      marginBottom: 15,
    },
    bold: {
      fontWeight: "600",
    }
    
})