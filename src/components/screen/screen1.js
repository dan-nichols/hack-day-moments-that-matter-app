import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class Screen1 extends Component {

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

Screen1.navigationOptions = {title: 'Screen1'};

export default Screen1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
})