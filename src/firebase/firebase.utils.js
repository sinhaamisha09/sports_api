 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 const config = {
    apiKey: "AIzaSyApDHgjEsetUdl8XtPyXg74dWHFBFtukPI",
    authDomain: "sports-api-db.firebaseapp.com",
    databaseURL: "https://sports-api-db.firebaseio.com",
    projectId: "sports-api-db",
    storageBucket: "sports-api-db.appspot.com",
    messagingSenderId: "1018746582927",
    appId: "1:1018746582927:web:a46e38905e4d4503087dfa",
    measurementId: "G-7YMWLTCKTD"
  };

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
  	if(!userAuth) return;

  	const userRef =firestore.doc(`users/${userAuth.uid}`);

  	const snapShot = await userRef.get();

  	if(!snapShot.exist) {
  		const { displayName, email } = userAuth;
  		const createdAt = new Date();

  		try {

  			await userRef.set({
  				displayName,
  				email,
  				createdAt,
  				...additionalData
  			})

  		} catch (error) {
  			console.log('error creating user', error.message);
  		}
  	}
  	

  	return userRef; 
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;