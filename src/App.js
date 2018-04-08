import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentDidMount() {
        const config = {
            apiKey: "AIzaSyCgLnWJWTWmBxKZMLVaaG37KLsR2n46sSU",
            authDomain: "react-manager-88fc9.firebaseapp.com",
            databaseURL: "https://react-manager-88fc9.firebaseio.com",
            projectId: "react-manager-88fc9",
            storageBucket: "react-manager-88fc9.appspot.com",
            messagingSenderId: "221695044299"
        };
        firebase.initializeApp(config);
    }

    render() {
        //Second parameter is for initial state
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        )
    };

}

export default App;