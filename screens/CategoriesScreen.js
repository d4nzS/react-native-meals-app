import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('MealsOverview');
  };

  return <FlatList
    data={CATEGORIES}
    renderItem={({ item }) => <CategoryGridTile
      title={item.title}
      color={item.color}
      onPress={pressHandler}
    />}
    keyExtractor={item => item.id}
    numColumns={2}
  />;

};

export default CategoriesScreen;