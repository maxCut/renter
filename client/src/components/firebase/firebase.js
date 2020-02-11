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
        this.auth.onAuthStateChanged(authUser=>{
            if(!this.auth.currentUser)
            {
                console.log("logout")
                window.location.pathname = '/'
            }
        })
    }

    signup = (email,password) =>
    {
        if(email!=null && password !=null)
        {
            this.auth.createUserWithEmailAndPassword(email,password)    
            //window.location.path = '/'
            console.log("signed up")
        }
        else
        {
            console.log("null email or password")
        }
    }
    
    login = (email,password) =>
    {
        window.location.pathname = '/'
        console.log("curUSER: " + this.auth.currentUser)
        if(email!=null && password !=null)
        {
            this.auth.signInWithEmailAndPassword(email,password)
                .then(()=>{
                    console.log("logged in")
                    window.location.pathname = '/'
                })
        }
        else
        {
            console.log("null email or password")
        }
    }

    logout = () =>
    {
        this.auth.signOut();
    }

    getUser = () =>
    {
        console.log("getting user" + app.auth().currentUser)
        return this.auth.currentUser;
    }
}
export default Firebase
