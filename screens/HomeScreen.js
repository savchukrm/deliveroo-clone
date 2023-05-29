import React from 'react';
import { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
