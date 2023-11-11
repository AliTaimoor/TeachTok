/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Home from './src/screens/Home';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Tab = createBottomTabNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarStyle: {backgroundColor: "#000000"}, tabBarActiveTintColor: "white", headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <EntypoIcon name="home" color={color} size={21} />,
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <FontAwesomeIcon5 name="compass" color={color} size={21} />,
          }}
          listeners={{ tabPress: e => e.preventDefault() }}
        />
        <Tab.Screen
          name="Activity"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <EntypoIcon name="stopwatch" color={color} size={21} />,
          }}
          listeners={{ tabPress: e => e.preventDefault() }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <FontAwesomeIcon5 name="bookmark" color={color} size={21} />,
          }}
          listeners={{ tabPress: e => e.preventDefault() }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon: ({color}) => <MaterialIcon name="account-circle" color={color} size={21} />,
          }}
          listeners={{ tabPress: e => e.preventDefault() }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
