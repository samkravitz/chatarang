import firebase from 'firebase/app'
import database from 'firebase/app'
import Rebase from 're-base'


// Initialize Firebase
const config = {
    apiKey: "YOUR API_KEY",
    authDomain: "YOUR AUTH_DOMAIN",
    databaseURL: "YOUR DATABASE_URL",
    projectId: "YOUR PROJECT_ID",
    storageBucket: "YOUR STORAGE_BUCKET",
    messagingSenderId: "YOUR MESSAGING_SENDER_ID"
};

const app = firebase.initializeApp(config)
const db = app.database()

export default Rebase.createClass(db)