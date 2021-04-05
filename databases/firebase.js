import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCe50bbNO50B8du10671NAoqfoJ2vPQclo',
	authDomain: 'simplecrudreactnative.firebaseapp.com',
	projectId: 'simplecrudreactnative',
	storageBucket: 'simplecrudreactnative.appspot.com',
	messagingSenderId: '612982098759',
	appId: '1:612982098759:web:5bed4ff1bad51c462d5a62',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
