import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Button, ActivityIndicator } from 'react-native';
import firebase from '../databases/firebase';

const InformationUser = props => {
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		phone: '',
	});
	const [loading, setLoading] = useState(true);

	const getUserById = async id => {
		let dbRef = firebase.firestore().collection('users').doc(id);
		let doc = await dbRef.get();
		let userData = doc.data();

		userData.id = doc.id;
		setUser({ ...user, ...userData });
		setLoading(false);
	};

	const handleChangeText = (name, value) => {
		setUser({ ...user, [name]: value });
	};

	const updateUserById = async id => {
		let dbRef = firebase.firestore().collection('users').doc(id);
		let { name, email, phone } = user;
		await dbRef.set({ name, email, phone });
		props.navigation.navigate('List Users');
	};

	const deleteUserById = async id => {
		let dbRef = firebase.firestore().collection('users').doc(id);
		await dbRef.delete();
		props.navigation.navigate('List Users');
	};

	useEffect(() => {
		getUserById(props.route.params.id);
	}, []);

	if (loading) {
		return (
			<View>
				<ActivityIndicator size='large' color='yellow' />
			</View>
		);
	}
	return (
		<ScrollView style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Name' onChangeText={value => handleChangeText('name', value)} value={user.name} />
			</View>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Email' onChangeText={value => handleChangeText('email', value)} value={user.email} />
			</View>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Phone' onChangeText={value => handleChangeText('phone', value)} value={user.phone} />
			</View>
			<View>
				<Button title='Update User' color='blue' onPress={() => updateUserById(user.id)} />
			</View>
			<View>
				<Button title='Delete User' color='red' onPress={() => deleteUserById(user.id)} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 32,
	},
	inputGroup: {
		flex: 1,
		padding: 0,
		marginBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#CCCCCC',
	},
});

export default InformationUser;
