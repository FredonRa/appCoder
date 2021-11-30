import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListTasksScreen from '../screens/AddTaskScreen';
import CompletedTasksScreen from '../screens/CompletedTasksScreen';
import { Ionicons } from '@expo/vector-icons';
import Profile from '../screens/Profile';

const GlobalNavigation = () => {
    const [rows, setRows] = useState([]);
    const [completedRows, setCompletedRows] = useState([]);
    const Tab = createBottomTabNavigator();

    return (  
        <Tab.Navigator screenOptions={{header: () => null}} mode="transparentModal"
        >
            <Tab.Screen 
            name="Tasks"
            children={() => <ListTasksScreen rows={rows} setRows={setRows} completedRows={completedRows} setCompletedRows={setCompletedRows} />}
            options={{
                tabBarLabel: 'To do tasks',
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen 
            name="Completed tasks"
            children={() => <CompletedTasksScreen completedRows={completedRows} setCompletedRows={setCompletedRows} />}
            options={{
                tabBarLabel: 'Completed tasks',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="checkmark-circle" size={size} color={color} />
                ),
              }}
            />
                        <Tab.Screen 
            name="Profile"
            children={() => <Profile completedRows={completedRows} setCompletedRows={setCompletedRows} />}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />
        </Tab.Navigator>
    );
}
 
export default GlobalNavigation;