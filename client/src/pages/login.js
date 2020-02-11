import React,{Component} from 'react'
import {FirebaseContext} from '../components/firebase'
import { Link } from 'react-router-dom';

/*
 * Represents the inputed username and password
 */
const INITIAL_STATE = {
    username: '',
    password: ''
};

class Login extends Component {

    /*
     * Passing in the initial state is for initializing the state variables so we can modify them later
     */
    constructor(props)
    {
        super(props)
        this.state = {INITIAL_STATE};
    }

    /*
     * this function assumes that the trigger (the input tag) is going to have a field for name and value it then looks up
     * the state with name name and assigns value.
     */
    changeFunc= event => {
        this.setState({[event.target.name]:event.target.value})
    }


    render()
    {

        return(
            <div className = "LoginPage">
                <div class="container">
                    
                    {/*
                     * The consumer context allows us to use the same firebase instance created by the providor. 
                     * (allows firebase constructor to be called just once)
                     */}
                    <FirebaseContext.Consumer>
                        {firebase =>
                        {
                            return(
                            <div>
                            <form>
                                <label for="uname"><b>Enter Username</b></label>
                                <input type="text" placeholder="Username" name ="username" onChange={this.changeFunc}></input>
                                <label for="uname"><b>Enter Password</b></label>
                                <input type="password" placeholder="Password" name ="password" onChange = {this.changeFunc}></input>
                                <button  onClick = {() => firebase.login(this.state.username,this.state.password)}> 
                                   Login 
                                </button>
                            </form>
                            <p>
                                Don't have an account? <Link to='/signup'>Sign Up</Link>
                            </p>
                            </div>
                            )
                        }}
                    </FirebaseContext.Consumer>
                </div>
            </div>
        )

    }

}
export default Login;
