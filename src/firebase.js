import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDkUSaY1QQt9oDovfiP4iE_wEDldfEyodM",
    authDomain: "funfood-8116d.firebaseapp.com",
    projectId: "funfood-8116d",
    storageBucket: "funfood-8116d.appspot.com",
    messagingSenderId: "761244997424",
    appId: "1:761244997424:web:586ffe50c71ce466ae5af5",
    measurementId: "G-EJBXR5ZF5Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
// firebase.analytics();
export default firebase;
