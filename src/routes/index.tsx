import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Game from '../pages/Game';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator>
    <App.Screen name="Game" component={Game} />
  </App.Navigator>
);

export default AppRoutes;
