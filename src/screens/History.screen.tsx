import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const History: FC = () => {
  return (
    <View style={styles.container}>
      <Text>History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
