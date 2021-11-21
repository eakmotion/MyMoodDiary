import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Stats } from './Stats.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Stats" component={Stats} />
    </BottomTabs.Navigator>
  );
};