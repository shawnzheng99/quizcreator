/**
 * There are two versions.
 * 1. MySQL version, usage: see README.
 * 2. Firebase version, since MySql server cannot be used on Firebase. (firebase branch)
 * 
 * 
 *  */ 
const isFirebase = true;
const configFirebase = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
};
firebase.initializeApp(configFirebase);
