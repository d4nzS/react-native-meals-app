import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const pressHandler = id => {
    navigation.navigate('MealsOverview', {
      categoryId: id
    });
  };

  return <FlatList
    data={CATEGORIES}
    renderItem={({ item }) => <CategoryGridTile
      title={item.title}
      imageUrl={item.imageUrl}
      color={item.color}
      onPress={pressHandler.bind(null, item.id)}
    />}
    keyExtractor={item => item.id}
    numColumns={2}
  />;
};

export default CategoriesScreen;