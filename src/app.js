import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';

import Home from './components/screen/home';

export default class App extends Component {
    render () {
        return (
            <View style={styles.page}>
                <View style={styles.toolbar}/>
                <Home/>
            </View>
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