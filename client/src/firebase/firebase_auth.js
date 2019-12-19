import app from 'firebase/app'

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
        this.database = app.database();
        this.auth = app.auth();
    }

/*
 * posts data within users directory
 */
function postData(page,post)
{
    if(page!=null && page!="")//prevents overwriting directory
    {
        var userId = firebase.auth().currentUser.uid;
        var root = database.ref('classes/' + userId+"/"+page);
        root.set(
        {
            post
        });

    }
}

/*
 * Authenticate and update url
 */
function firebaseLogin()
{
    var email = document.getElementById("username").value
    var password = document.getElementById("password").value
    console.log(email);
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        document.getElementById("ErrorMessage").innerHTML = "<p>"+errorMessage+"</p>"

    }).then(function(){
        console.log("logged in!");
    })
}

/*
 * Creates new user
 */
function firebaseSignup()
{
    console.log("attempting to sign up")
    var email = document.getElementById("username").value
    var password = document.getElementById("password").value
    isError = false 
    console.log(email);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        isError = true
        document.getElementById("ErrorMessage").innerHTML = "<p>"+errorMessage+"</p>"
        console.log(errorMessage);
    })
    if(!isError)
    {
        setTimeout(returnToLogin,1000)
    }
}
}
export default Firebase

