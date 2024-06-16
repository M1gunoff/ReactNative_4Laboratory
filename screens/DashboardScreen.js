import { StyleSheet, Text, View, Button } from 'react-native'


const DashboardScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Что такое Drawer Navigation?</Text>
      <Text style={styles.description}>
        Drawer Navigation - это панель пользовательского интерфейса, на которой отображается меню навигации. По умолчанию оно скрыто, но появляется, когда пользователь проведет пальцем от края экрана. В навигации часто используется панель слева или справа для навигации.
      </Text>
      <Text style={styles.descriptionPress}>Нажмите на кнопку снизу.</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  )
}

export default DashboardScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    description: {
      fontSize: 16,
      textAlign: 'center',
      lineHeight: 23,
    },
    descriptionPress: {
        marginTop: 15,
        fontSize: 18,
        marginBottom: 10,
    }
  });
  
  