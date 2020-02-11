import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app.js';
import Firebase, {FirebaseContext} from './components/firebase'

ReactDOM.render(
    /*
     * this provider wll ensure the same instance of the firebase construction is used when we later call consumer
     */
    <FirebaseContext.Provider value = {new Firebase()}>
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('app')
);
