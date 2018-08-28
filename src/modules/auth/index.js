import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Welcome from './welcome';
import Login from './login';

const Style = {
}

const AuthStack = ({verified = true }) => {
    return createStackNavigator ({
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                title: 'Welcome',
                header: null,
            },
        },
        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login',
                headerTitleStyle: {
                    fontSize: 17,
                },
            },
        }
    }, {
            mode: 'screen',
            //headerMode: 'none',
            initialRouteName: (verified)? "Login" : "Welcome"
    });
};

export default AuthStack;