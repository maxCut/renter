import React,{Component} from 'react'
import {FirebaseContext} from '../firebase/f_index.js'

const INITIAL_STATE = {
    username: '',
    password: ''
};

class Login extends Component {
    constructor(props)
    {
        super(props)
        this.state = {INITIAL_STATE};
    }

    onChange = event => {
        this.setState({[event.target.name]:event.target.value})
    }


    render()
    {

        return(
            <div className = "LoginPage">
                <div class="container">
                    <FirebaseContext.Consumer>
                        {firebase =>
                        {
                            return(
                            <form>
                                <label for="uname"><b>Enter Desired Username</b></label>
                                <input type="text" placeholder="Username" name ="username" onChange={this.onChange}></input>
                                <label for="uname"><b>Enter Desired Password</b></label>
                                <input type="password" placeholder="Password" name ="password" onChange = {this.onChange}></input>
                                <button  onClick = {() => firebase.login(this.state.username,this.state.password)}> 
                                   Login 
                                </button>
                            </form>
                            )
                        }}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )

    }

}
export default Login;
