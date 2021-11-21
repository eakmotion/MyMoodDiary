import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Home: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
