import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
