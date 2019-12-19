import app from 'firebase/app'
import 'firebase/auth'

/*
 * public api information
 */
var config = {
    apiKey: "AIzaSyB7AxFJibeTAOmIp0FW6mbHnaHtSazZsUI",
    authDomain: "renter-89374.firebaseio.com/",
    databaseURL: "https://renter-89374.firebaseio.com/",
    projectId: "renter-89374",
    storageBucket: "renter-89374.appspot.com",
    messagingSenderId: "342409210172"
  };
class Firebase {
    constructor()
    {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    signup = (email,password) =>
    {
        console.log("signing up user: ")
        console.log(email)
        this.auth.createUserWithEmailAndPassword(email,password)    
    }
    
    login = (email,password) =>
    {
        this.auth.signInWithEmailAndPassword(email,password)
    }

    logout = () =>
    {
        this.auth.signOut();
    }
}
export default Firebase
