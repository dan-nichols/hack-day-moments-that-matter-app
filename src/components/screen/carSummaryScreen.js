import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

class CarSummaryScreen extends Component {

    constructor () {
        super()
    }

    render () {

        return (
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        )
    }
}

CarSummaryScreen.navigationOptions = {title: 'CarSummaryScreen'};

export default CarSummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});