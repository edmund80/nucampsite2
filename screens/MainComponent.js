import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import CampsiteInfoScreen from './CampsiteInfoScreen';
import DirectoryScreen from './DirectoryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#5637dd' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    )
}

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Directory'
                component={DirectoryScreen}
                options={{ title: 'Campsite Directory' }}
            />
            <Stack.Screen
                name='CampsiteInfo'
                component={CampsiteInfoScreen}
                options={({ route }) => ({
                    title: route.params.campsite.name,
                })}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    const [selectedCampsiteId, setSelectedCampsiteId] = useState(null);

    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? Constants.statusBarHeight : 0,
            }}
        >
           
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#CEC8FF' }}
            >
                <Drawer.Screen 
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen 
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Directory' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;

