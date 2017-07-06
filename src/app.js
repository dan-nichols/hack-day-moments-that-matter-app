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
            <View>
                <View style={styles.toolbar}/>
                <Home />
            </View>
        );
    }
}

AppRegistry.registerComponent('MomentsThatMatterApp', () => App);


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