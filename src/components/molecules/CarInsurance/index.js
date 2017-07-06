import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Thumbnail, Left, Body, Right } from 'native-base';

class CarInsurance extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.daysLeft >= 10 ? "green" : "red";

        return (
            <View style={styles.container}>
                <Left>
                    <Image source={this.props.insurerImage}
                           style={{width: 75, height: 75}}
                    />
                    <Body>
                    <Text>
                        {this.props.typeOfCover} {this.props.insurer} Insurance
                    </Text>
                    <Text style={{color:daysLeftColor}}>
                        {this.props.daysLeft} Days Remaining
                    </Text>
                    </Body>
                </Left>
            </View>
        )
    }
}

export default CarInsurance;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});