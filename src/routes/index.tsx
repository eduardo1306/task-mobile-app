import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';

const { Screen, Navigator } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen 
          options={{
            headerShown: false,
          }} 
          component={Home} 
          name='/' 
        />
      </Navigator>
    </NavigationContainer>
  )
}

export default Routes;