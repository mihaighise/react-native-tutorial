import { useDeviceOrientation } from '@react-native-community/hooks';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

export default function App() {

  const orientation = useDeviceOrientation()
  console.log('orientation is:', orientation)

  return (
    // <SafeAreaView style={styles.container}>
    //   {/* <View style={{
    //     backgroundColor: 'dodgerblue', width: '100%',
    //     height: orientation === 'landscape' ? '100%' : '30%'
    //   }}></View> */}
    //   <View style={{ backgroundColor: 'green', flex: 0.5, height: 200 }}></View>
    // </SafeAreaView>
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      flexWrap: 'wrap'
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        // flex: 1,
        width: 100,
        height: 300,
        alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'gold',
        // flex: 1,
        width: 100,
        height: 200
      }} />
      <View style={{
        backgroundColor: 'tomato',
        // flex: 1,
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'grey',
        // flex: 1,
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        // flex: 1,
        width: 100,
        height: 100
      }} />
    </View>
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
