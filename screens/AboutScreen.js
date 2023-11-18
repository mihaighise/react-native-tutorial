import { useDeviceOrientation } from '@react-native-community/hooks';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function App({ route }) {
  const { name } = route.params;
  const navigation = useNavigation();
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const orientation = useDeviceOrientation();
  console.log('orientation is:', orientation);
  console.log('Hello World');

  const fetchData = async (limit = 1) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1500);
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff"></ActivityIndicator>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        {name && <Text>About {name}</Text>}
        <Button title="Go to home" onPress={() => navigation.navigate('Home')}></Button>
        <FlatList
          data={postList}
          refreshing={refreshing}
          onRefresh={handleRefresh}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 10
  },
  title: {
    fontSize: 30
  },
  body: {
    fontSize: 24,
    color: '#666666'
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
