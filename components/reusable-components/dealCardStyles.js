// dealCardStyles.js
import { StyleSheet } from 'react-native';

const dealCardStyles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  },
  regularText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  miniText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
});

export default dealCardStyles;
