import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateUser from './screens/CreateUser';
import InformationUser from './screens/InformationUser';
import ListUsers from './screens/ListUsers';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='List Users' component={ListUsers} />
				<Stack.Screen name='Create User' component={CreateUser} />
				<Stack.Screen name='Information User' component={InformationUser} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
