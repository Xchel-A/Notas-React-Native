import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'
import Home from './src/screens/Home'
import Notas from './src/screens/Notas'

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Notas') {
            iconName = focused ? 'sticky-note' : 'sticky-note-o';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name='Home' component={Home} options={{ tabBarLabel: 'Inicio' }}/>
        <Tab.Screen name='Notas' component={Notas} options={{ tabBarLabel: 'Notas' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
