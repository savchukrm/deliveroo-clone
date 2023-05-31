import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        className="pt-4"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        <RestaurantCard
          id={123}
          lat={0}
          long={20}
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          imgUrl="https://links.papareact.com/gn7"
          address="123 Main Street"
          short_description="test description"
        />
        <RestaurantCard
          id={123}
          lat={0}
          long={20}
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          imgUrl="https://links.papareact.com/gn7"
          address="123 Main Street"
          short_description="test description"
        />
        <RestaurantCard
          id={123}
          lat={0}
          long={20}
          title="Yo! Sushi"
          genre="Japanese"
          dishes={[]}
          rating={4.5}
          imgUrl="https://links.papareact.com/gn7"
          address="123 Main Street"
          short_description="test description"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
