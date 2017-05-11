import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screen/home';
import Screen1 from './screen/screen1';
import Screen2 from './screen/screen2';

const Root = StackNavigator({
    Home: {screen: Home},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
})

export default class App extends Component {
    render () {
        return (
            <Root />
        );
    }
}


AppRegistry.registerComponent('FinancialFitnessApp', () => App);
