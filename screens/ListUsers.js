import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../databases/firebase';

const ListUsers = props => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		let usersArr = [];
		firebase
			.firestore()
			.collection('users')
			.onSnapshot(querySnapshot => {
				querySnapshot.docs.forEach(doc => {
					let user = doc.data();
					user.id = doc.id;
					usersArr.push(user);
				});
				setUsers([...users, ...usersArr]);
			});
	}, []);

	return (
		<ScrollView>
			<Button title='Create User' onPress={() => props.navigation.navigate('Create User')} />
			{users.map(user => {
				return (
					<ListItem
						key={user.id}
						bottomDivider
						onPress={() => props.navigation.navigate('Information User', { id: user.id })}
					>
						<ListItem.Chevron />
						<Avatar source={{ uri: 'https://reactnativeelements.com/img/avatar/avatar--photo.jpg' }} rounded />
						<ListItem.Content>
							<ListItem.Title>{user.name}</ListItem.Title>
							<ListItem.Subtitle>{user.email}</ListItem.Subtitle>
						</ListItem.Content>
					</ListItem>
				);
			})}
		</ScrollView>
	);
};

export default ListUsers;
