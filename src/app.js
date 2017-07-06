import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import { Provider } from 'react-redux';

import Home from './components/screen/home';

import configureStore from './store'
const store = configureStore();

export default class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <View style={styles.page}>
                    <View style={styles.toolbar}/>
                    <Home/>
                </View>
            </Provider>
        );
    }
}

AppRegistry.registerComponent('MomentsThatMatterApp', () => App);


const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#ffcd05',
        //backgroundColor: '#004346',
        //backgroundColor: '#478081',
        height: 23
    },
    page: {
        //backgroundColor: '#CDCBC3',
        backgroundColor: '#F5F3F1',
        flex: 1
    }
});