import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Heading } from '@/components/ui/heading';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

// Sample data for categories and restaurants (replace with API calls)
const categories = [
  { id: 1, name: 'Pizza', imageUrl: require('@/assets/items/pizza.png') },
  { id: 2, name: 'Burgers', imageUrl: require('@/assets/items/burger.png') },
  { id: 3, name: 'Sushi', imageUrl: require('@/assets/items/sushi.png') },
  { id: 4, name: 'Pasta', imageUrl: require('@/assets/items/pasta.png') },
  { id: 5, name: 'Desserts', imageUrl: require('@/assets/items/dessert.png') },
];

const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    imageUrl: require('@/assets/restaurnant/pizza_restaurant.png'),
    cuisine: 'Pizza',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Burger Joint',
    imageUrl: require('@/assets/restaurnant/burger_restaurant.png'),
    cuisine: 'Burgers',
    rating: 4.2,
  },
  {
    id: 3,
    name: 'Sushi Spot',
    imageUrl: require('@/assets/restaurnant/sushi_restaurant.png'),
    cuisine: 'Sushi',
    rating: 4.8,
  },
  {
    id: 4,
    name: "Pasta Place",
    imageUrl: require('@/assets/restaurnant/pasta_restaurant.png'),
    cuisine: "Pasta",
    rating: 4.6
  }
];

export default function Home() {
  const [userData, setUserData] = useState('');
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    CheckUserData();
  }, []);

  const CheckUserData = async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      console.log("userName ",userName)
      setUserData(userName || "Guest");

    } catch (error) {
      console.log(error);
    }
  };

  const handleRestaurantPress = (restaurantId: number) => {
    // Navigate to the Restaurant Details screen, passing the restaurant ID
    console.log("restaurantId ", restaurantId)
    navigation.navigate('RestaurantDetails', { restaurantId });
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Heading size="3xl" style={styles.headerText}>
            Welcome, {userData}!
          </Heading>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.categoriesContainer}>
            <Heading size={"2xl"}>Categories</Heading>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories.map((category) => (
                <TouchableOpacity key={category.id} style={styles.categoryItem}>
                  <Image
                    source={category.imageUrl}
                    style={styles.categoryImage}
                  />
                  <Text style={styles.categoryName}>{category.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.restaurantsContainer}>
            <Heading size={"2xl"}>Restaurants</Heading>
            {restaurants.map((restaurant) => (
              <TouchableOpacity
                key={restaurant.id}
                style={styles.restaurantItem}
                onPress={() => handleRestaurantPress(restaurant.id)}
              >
                <Image
                  source={restaurant.imageUrl}
                  style={styles.restaurantImage}
                />
                <View style={styles.restaurantInfo}>
                  <Text style={styles.restaurantName}>{restaurant.name}</Text>
                  <Text style={styles.restaurantCuisine}>
                    {restaurant.cuisine}
                  </Text>
                  <Text style={styles.restaurantRating}>
                    Rating: {restaurant.rating}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: '#333',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 16,
  },
  restaurantsContainer: {
    marginBottom: 20,
  },
  restaurantItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantCuisine: {
    fontSize: 16,
    color: '#666',
  },
  restaurantRating: {
    fontSize: 14,
    color: '#666',
  },
});
