import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from './login.js'; 
import SignUp from './signup.js'
import Categories from './categories.js'

class App extends Component {
    render()
    {
        return(
            <Router>
                <div className = "page-container">
                    <Route exact path = "/" component = {Categories}/>
                    <Route exact path = "/Login" component = {Login}/>
                    <Route path = "/signup" component = {SignUp}/>
                </div>
            </Router>
        )
    }

}
export default App;
