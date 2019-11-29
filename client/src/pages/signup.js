import React,{Component} from 'react'

class SignUp extends Component {
    render()
    {
        return(
            <div className = "SignUpPage">
                <div class="container">
                    <label for="uname"><b>Enter Desired Username</b></label>
                    <input type="text" placeholder="Username" id ="username"></input>
                    <label for="uname"><b>Enter Desired Password</b></label>
                    <input type="password" placeholder="Password" id ="password"></input>
                    <button onclick = "firebaseSignup()" id="login-btn">
                        Signup
                    </button>
                </div>
            </div>
        )

    }

}
export default SignUp;
