import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, Text } from 'react-native';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        title: 'Welcome home',
        headerStyle: {
          backgroundColor: "#6a51ae"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        contentStyle: {
          backgroundColor: "#e8e4f3"
        }
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ firstName: 'Test name' }}
          options={{
            title: 'Welcome home',
            headerStyle: {
              backgroundColor: "#6a51ae"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerRight: () => (
              <Pressable onPress={() => alert("Menu button pressed!")}>
                <Text style={{ color: "#fff", fontSize: 16 }}>Menu</Text>
              </Pressable>
            ),
            contentStyle: {
              backgroundColor: "#e8e4f3"
            }
          }} />
        <Stack.Screen name="About" component={AboutScreen}
        // options={({ route }) => ({
        //   title: route.params.name,
        //   headerLeft: () => (<></>)
        // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
