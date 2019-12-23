import React,{Component} from 'react'
import {FirebaseContext} from '../firebase/f_index.js'

const INITIAL_STATE = {
    username: '',
    password: ''
};
class SignUp extends Component {
    constructor(props)
    {
        super(props)
        this.state = {INITIAL_STATE};
    }

    changeFunc = event => {
        this.setState({[event.target.name]:event.target.value})
    }

    render()
    {
        return(
            <div className = "SignUpPage">
                <div class="container">
 
                    <FirebaseContext.Consumer>
                        {firebase =>
                        {
                            return(
                            <div>
                                <label for="uname"><b>Enter Desired Username</b></label>
                                <input type="text" placeholder="Username" name ="username" onChange={this.changeFunc} required/>
                                <label for="uname"><b>Enter Desired Password</b></label>
                                <input type="password" placeholder="Password" name ="password" onChange = {this.changeFunc} required/>
                                <button  onClick = {() => firebase.signup(this.state.username,this.state.password)}> 
                                    Signup
                                </button>
                            </div>
                            )
                        }}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )

    }

}
export default SignUp;
