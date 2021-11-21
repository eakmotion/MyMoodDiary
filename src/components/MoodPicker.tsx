import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MoodOptionType } from '../types';

const moodOptions: MoodOptionType[] = [
  { emoji: '😤', description: 'frustrated' },
  { emoji: '😔', description: 'pensive' },
  { emoji: '😐', description: 'neutral' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
];

export const MoodPicker: FC = () => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType>();

  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => setSelectedMood(option)}
            key={option.description}
            style={[
              styles.moodItem,
              option.emoji === selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {selectedMood?.emoji === option.emoji ? option.description : ' '}
          </Text>
        </View>
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
  moodItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 60,
    width: 60,
    marginBottom: 5,
  },
  selectedMoodItem: {
    backgroundColor: '#454C73',
    borderColor: '#fff',
    borderWidth: 2,
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
