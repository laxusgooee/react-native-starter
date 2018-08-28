import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import { Root } from 'native-base';
import CONSTANTS from './App.constants';
import store from './redux/store';
import Navigation from './App.routes';

type Props = {};
export default class App extends Component < Props > {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoaded: false
        };
    }

    componentDidMount() {
    }

    renderInitialView() {

        const AppNavigation = Navigation({loggedIn: this.state.isLoggedIn});
        return <AppNavigation />
    }

    render() {

        return (
            <Root>
                <Provider store={store}>
                  {this.renderInitialView()}
                </Provider>
            </Root>
        );
    }
}