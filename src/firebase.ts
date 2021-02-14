import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyADb0bOqGoA5xNolcYrQMrH8Ua3atC0NuI",
    authDomain: "quiz-app-react-ts-ehmusman.firebaseapp.com",
    projectId: "quiz-app-react-ts-ehmusman",
    storageBucket: "quiz-app-react-ts-ehmusman.appspot.com",
    messagingSenderId: "608229349497",
    appId: "1:608229349497:web:6f390c3519548976c89ca8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;