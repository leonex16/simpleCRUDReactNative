import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import firebase from '../databases/firebase';

const CreateUser = props => {
	const [inputValues, setInputValues] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const handleChangeText = (name, value) => {
		setInputValues({ ...inputValues, [name]: value });
	};

	const saveNewUser = async dataForm => {
		await firebase.firestore().collection('users').add(dataForm);
		props.navigation.navigate('List Users');
	};

	return (
		<ScrollView style={styles.container}>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Name' onChangeText={value => handleChangeText('name', value)} />
			</View>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Email' onChangeText={value => handleChangeText('email', value)} />
			</View>
			<View style={styles.inputGroup}>
				<TextInput placeholder='Phone' onChangeText={value => handleChangeText('phone', value)} />
			</View>
			<View>
				<Button title='Save User' onPress={() => saveNewUser(inputValues)} />
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

export default CreateUser;
