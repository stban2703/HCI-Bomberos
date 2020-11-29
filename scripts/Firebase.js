// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD5aCl9FXUsAKsGPXDReob7Ebh4TQ9TJfs",
    authDomain: "hci-bomberos.firebaseapp.com",
    databaseURL: "https://hci-bomberos.firebaseio.com",
    projectId: "hci-bomberos",
    storageBucket: "hci-bomberos.appspot.com",
    messagingSenderId: "720207315599",
    appId: "1:720207315599:web:2078013adea0d934a166fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const userRef = db.collection('users');
