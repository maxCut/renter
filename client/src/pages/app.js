import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from './login.js'; 
import SignUp from './signup.js'
import Categories from './categories.js'
import Header from './header/header.js'
import * as ROUTES from '../constants/routes'
import Navigation from '../components/Navigation'

class App extends Component {
    render()
    {
        return(
            <Router>
                <header>
                    <Route exact path = "/" component = {Header}/>
                </header>
                <div className = "page-container">
                    <Route exact path = "/" component = {Categories}/>
                    <Route exact path = "/login" component = {Login}/>
                    <Route path = "/signup" component = {SignUp}/>
                </div>
            </Router>
        )
    }

}
export default App;
