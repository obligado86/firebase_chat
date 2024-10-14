import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size='large' color='gray' />
    </View>
  )
}
