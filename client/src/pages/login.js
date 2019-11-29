import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
    render()
    {

        return(
            <div className = "LoginPage">
                <div id = "ErrorMessage"></div>
                <div class="imgcontainer">
                </div>

                <div class="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id="username" required></input>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" id="password" required></input>

                    <button onclick = "firebaseLogin()" id="login-btn">
                        Login
                    </button>
                    <label>
                    </label>
                    <a href = "/signup">
                    New User
                    </a>
                </div>
            </div>
        )

    }

}
export default Login;
