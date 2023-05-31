import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import Icon from 'react-native-vector-icons/FontAwesome';

const RestaurantCard = ({
  id,
  lat,
  long,
  title,
  genre,
  dishes,
  rating,
  imgUrl,
  address,
  short_description,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm " />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>

        <View className="flex-row items-center space-x-1">
          <StarIcon size={22} color="green" opacity={0.5} />
          <Text className="text-gray-600 text-sm">
            <Text className="text-green-500 text-sm">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <Icon name="location-arrow" size={22} color="green" />
          <Text className="text-gray-600 text-xs">Nearby · {address}</Text>
        </View>

        {/* <Text className="text-gray-600 text-sm">{genre}</Text>
        <Text className="text-gray-600 text-sm">{dishes}</Text>
        <Text className="text-gray-600 text-sm">{address}</Text>
        <Text className="text-gray-600 text-sm">{short_description}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
