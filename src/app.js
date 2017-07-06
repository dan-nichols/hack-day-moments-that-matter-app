import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/screen/home';
import Screen1 from './components/screen/screen1';
import Screen2 from './components/screen/screen2';

export default class App extends Component {
    render () {
        return (
            <View>
                <View style={styles.toolbar}/>
                <Home />
            </View>
        );
    }
}

AppRegistry.registerComponent('FinancialFitnessApp', () => App);


const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#808080',
        height: 23
    },
    page: {
        backgroundColor: '#1f1f1f',
        flex: 1
    }
});