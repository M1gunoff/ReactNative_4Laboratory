import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Нажмите на кнопку сверху слева, чтобы вернуться в Drawer Panel </Text>
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 16,
    }
})