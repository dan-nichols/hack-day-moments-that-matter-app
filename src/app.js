import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/screen/home';
import Screen1 from './components/screen/screen1';
import Screen2 from './components/screen/screen2';

export default class App extends Component {
    render () {
        return (
            <Home />
        );
    }
}

AppRegistry.registerComponent('FinancialFitnessApp', () => App);
