import firebase from 'firebase/compat/app';  
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCo6Fc2vlViTm9WwP66CPXl8cxT5eZGCVE",
    authDomain: "miniprojek-c1f96.firebaseapp.com",
    projectId: "miniprojek-c1f96",
    storageBucket: "miniprojek-c1f96.appspot.com",
    messagingSenderId: "1063852990234",
    appId: "1:1063852990234:web:0dbfc2a8485c0ffc2b56a3",
    measurementId: "G-5H5C30ENC8"
};


if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const createUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('Error creating user', error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
