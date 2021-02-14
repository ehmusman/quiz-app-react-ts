importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js")

firebase.initializeApp({
    apiKey: "AIzaSyADb0bOqGoA5xNolcYrQMrH8Ua3atC0NuI",
    authDomain: "quiz-app-react-ts-ehmusman.firebaseapp.com",
    projectId: "quiz-app-react-ts-ehmusman",
    storageBucket: "quiz-app-react-ts-ehmusman.appspot.com",
    messagingSenderId: "608229349497",
    appId: "1:608229349497:web:6f390c3519548976c89ca8"
})
firebase.messaging();