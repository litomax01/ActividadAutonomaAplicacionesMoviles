import { Image, StyleSheet } from 'react-native';

type ImageProps = {
  source: any;
};

export default function ImageDisplay({ source }: ImageProps) {
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});
