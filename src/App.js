import React, { Component } from 'react';
import firebase from 'firebase';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
                            apiKey: 'AIzaSyCRDKqE-hTmgdegyGtPf9vOM7VDMKQwoY4',
                            authDomain: 'pendidikanagamaislam-27316.firebaseapp.com',
                            databaseURL: 'https://pendidikanagamaislam-27316.firebaseio.com',
                            storageBucket: 'pendidikanagamaislam-27316.appspot.com',
                            messagingSenderId: '140819558273'
                        };
    firebase.initializeApp(config);
    }

    render() {
        return (
            <Router />
        );
    }
}
export default App;
