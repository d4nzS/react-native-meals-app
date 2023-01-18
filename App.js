import { StyleSheet } from 'react-native';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <CategoriesScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
