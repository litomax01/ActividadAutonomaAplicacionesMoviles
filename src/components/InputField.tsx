import { TextInput, StyleSheet } from 'react-native';

type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export default function InputField({ value, onChangeText, placeholder }: InputFieldProps) {
  return <TextInput style={styles.input} value={value} onChangeText={onChangeText} placeholder={placeholder} keyboardType="numeric" />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: 200,
    textAlign: 'center',
  },
});
