import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 40 }}>Welcome to Pharmacy App</Text>

      <View style={{ marginBottom: 10, width: '100%' }}>
        <Button title="View Products" onPress={() => router.push('/products')} />
      </View>

      <View style={{ marginBottom: 10, width: '100%' }}>
        <Button title="Login" onPress={() => router.push('/login')} />
      </View>

      <View style={{ width: '100%' }}>
        <Button title="Register" onPress={() => router.push('/register')} />
      </View>
    </View>
  );
}
