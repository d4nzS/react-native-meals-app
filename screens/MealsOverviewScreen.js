import { useLayoutEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.includes(catId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find(category => category.id === catId).title
    });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealItem
          title={item.title}
          imageUrl={item.imageUrl}
          duration={item.duration}
          complexity={item.complexity}
          affordability={item.affordability}
        />}
        keyExtractor={item =>  item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});