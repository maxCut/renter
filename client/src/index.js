import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app.js';
import Firebase, {FirebaseContext} from './firebase/f_index.js'

ReactDOM.render(
    <FirebaseContext.Provider value = {new Firebase()}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('app')
);
