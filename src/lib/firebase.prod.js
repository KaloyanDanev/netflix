import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "netflix-ce95a.firebaseapp.com",
    databaseURL: "https://netflix-ce95a.firebaseio.com",
    projectId: "netflix-ce95a",
    storageBucket: "netflix-ce95a.appspot.com",
    messagingSenderId: "131893572895",
    appId: "1:131893572895:web:2e3d1f33d5bce79e1c2c2a"
};

const firebase = Firebase.initializeApp(config);

export { firebase };