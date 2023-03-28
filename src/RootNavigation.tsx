import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContent} from '@react-navigation/drawer';
import Home from './screens/Home';
import Article from './screens/Article';
import CustomDrawer from './CustomDrawer';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Like from './screens/Like';
const Drawer = createDrawerNavigator();

const RootNavigation = () => {
  const ShowLikes = props => {
    props.navigation.navigate('Like');
  };
  return (
    // drawerContent={props => <CustomDrawer {...props} />}
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'aliceblue',
            width: 250,
          },
          headerStyle: {
            backgroundColor: 'aliceblue',
          },
        }}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={props => ({
            headerRight: () => {
              return (
                <Pressable onPress={() => ShowLikes(props)}>
                  <AntDesign name="heart" size={24} color="#fb3958" />
                </Pressable>
              );
            },
            headerLeftContainerStyle: {
              paddingHorizontal: 10,
            },
            headerRightContainerStyle: {
              paddingHorizontal: 10,
            },
          })}
        />
        <Drawer.Screen name="Article" component={Article} />
        <Drawer.Screen name="Like" component={Like} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
