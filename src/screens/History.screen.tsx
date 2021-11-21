import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const appContext = useAppContext();

  return (
    <ScrollView>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </ScrollView>
  );
};
