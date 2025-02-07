import { View } from 'react-native';
import Title from '../components/Title';
import ImageDisplay from '../components/ImageDisplay';
import Button from '../components/Button';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Title text="Bienvenido" />
      <ImageDisplay source={require('../../assets/division.png')} />
      <Button title="Acceder" onPress={() => navigation.navigate('Calculation')} />
    </View>
  );
}
