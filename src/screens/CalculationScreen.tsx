import { useState } from 'react';
import { View, Text } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function CalculationScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleDivide = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (b === 0) {
      setResult(a === 0 ? 'INDETERMINACIÓN' : 'NO EXISTE DIVISIÓN PARA CERO');
    } else {
      setResult((a / b).toFixed(2));
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <InputField value={num1} onChangeText={setNum1} placeholder="Número 1" />
      <InputField value={num2} onChangeText={setNum2} placeholder="Número 2" />
      <Button title="Dividir" onPress={handleDivide} />
      {result && <Text>Resultado: {result}</Text>}
    </View>
  );
}
