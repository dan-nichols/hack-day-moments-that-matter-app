import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { CardItem, Thumbnail, Left, Body, Right } from 'native-base';

class CarInsurance extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.daysLeft >= 10 ? "green" : "red";

        return (
            <CardItem style={styles.container}>
                <Left>
                    <Image source={this.props.insurerImage}
                           style={{width: 75, height: 75}}
                    />
                    <Body>
                        <Text style={{fontWeight:'bold',
                            color: '#004346'}}>
                            You're covered!
                        </Text>
                        <Text style={{color:daysLeftColor}}>
                            ${this.props.repaymentAmount} due in {this.props.daysLeft} days
                        </Text>
                    </Body>
                    <Text style={{color:'grey'}}> > </Text>
                </Left>
            </CardItem>
        )
    }
}

export default CarInsurance;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: .1,
        borderRadius:2,
        borderColor: '#D3D3D3',
        shadowOffset:{  width: 1.5,  height: 1.5,  },
        shadowColor: '#D3D3D3',
        shadowOpacity: .5,
    }
};