import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Platform, SafeAreaView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function App() {

  const handlePress = () => console.log("Text pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        My first mobile app - A really really long text. Make this longer to see what happens.</Text>
      {/* <Image source={require('./assets/bmw1.jpg')} /> */}
      <TouchableHighlight onPress={() => console.log('Aaaa')}>
        <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
        {/* <Image
          blurRadius={2}
          source={{ width: 200, height: 300, uri: 'https://picsum.photos/id/237/200/300' }} /> */}
      </TouchableHighlight>
      <Button
        color="orange"
        title='Click me'
        onPress={() => Alert.alert("Unfortunately, the clock is ticking", "the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting. Do you understand?", [
          { text: "I Understand", onPress: () => console.log('good') },
          { text: "remain ignorant", onPress: () => console.log('bad') }
        ])} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
