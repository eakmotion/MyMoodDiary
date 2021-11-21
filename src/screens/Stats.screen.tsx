import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Stats: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
