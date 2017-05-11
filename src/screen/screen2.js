import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Screen2 extends Component {

    constructor ({navigation}) {
        super()
    }

    render () {

        return (
            <View style={styles.container}>
            </View>
        )
    }
}

Screen2.navigationOptions = {title: 'Screen2'};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})