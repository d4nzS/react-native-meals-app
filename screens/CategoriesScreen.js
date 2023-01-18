import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = () => {
  return <FlatList
    data={CATEGORIES}
    renderItem={({ item }) => <CategoryGridTile
      title={item.title}
      color={item.color}
    />}
    keyExtractor={item => item.id}
    numColumns={2}
  />;

};

export default CategoriesScreen;