import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Thumbnail, Left, Body, Right } from 'native-base';

class CarLoan extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.daysLeft >= 10 ? "green" : "red";

        return (
            <View style={styles.container}>
                <Left>
                    <Image source={this.props.loanImage}
                           style={{width: 75, height: 75}}
                    />
                    <Body>
                    <Text>
                        {this.props.typeOfLoan} {this.props.banker}
                    </Text>
                    <Text style={{color:daysLeftColor}}>
                        Payment due in {this.props.daysLeft} days
                    </Text>
                    </Body>
                </Left>
            </View>
        )
    }
}

export default CarLoan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});