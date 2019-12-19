import React,{Component} from 'react'
import {FirebaseContext} from '../firebase/f_index.js'

class SignUp extends Component {
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div className = "SignUpPage">
            <script type = "text/jsx">
                console.log("test");
            </script>
                <div class="container">
                    <label for="uname"><b>Enter Desired Username</b></label>
                    <input type="text" placeholder="Username" id ="username" ref={(input) => this.username = input}></input>
                    <label for="uname"><b>Enter Desired Password</b></label>
                    <input type="password" placeholder="Password" id ="password" ref={(input) => this.password = input}></input>
                    
                    <FirebaseContext.Consumer>
                        {firebase =>
                        {
                            return(
                                <button onclick = {firebase.login(this.username,this.password)} id="login-btn">
                                    Signup
                                </button>
                            )
                        }}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )

    }

}
export default SignUp;
