import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDhR0GDpulapU-dEYFASrP1QGXPsVX4EG8",
    authDomain: "pos-se.firebaseapp.com",
    projectId: "pos-se",
    storageBucket: "pos-se.appspot.com",
    messagingSenderId: "949166791976",
    appId: "1:949166791976:web:8cfebfa74b2129bf04c41d"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
