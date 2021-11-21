import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const moodOptions = [
  { emoji: '😤', description: 'frustrated' },
  { emoji: '😔', description: 'pensive' },
  { emoji: '😐', description: 'neutral' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
];

export const MoodPicker: FC = () => {
  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <Text key={option.emoji} style={styles.moodText}>
          {option.emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
