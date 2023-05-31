import React from 'react';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
} from 'react-native-heroicons/outline';

import Icon from 'react-native-vector-icons/FontAwesome';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          className="h-7 w-7 bg-gray-300 rounded-full"
          source={{ uri: 'https://links.papareact.com/wru' }}
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <Icon name="search" size={25} color="#00CCBB" />
          <TextInput
            keyboardType="default"
            placeholder="Restaurants and cuisines"
          />
        </View>

        <AdjustmentsVerticalIcon size={35} color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placement from our partners"
        />
        <FeaturedRow
          id="1234"
          title="Tasty Discount"
          description="Everyone's been enjoying these juicy discounts!"
        />
        <FeaturedRow
          id="12345"
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
