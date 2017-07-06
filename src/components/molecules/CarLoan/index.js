import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { CardItem, Thumbnail, Left, Body, Right } from 'native-base';

class CarLoan extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.daysLeft >= 10 ? "green" : "red";

        return (
            <CardItem style={styles.container}>
                <Left>
                    <Image source={this.props.loanImage}
                           style={{width: 75, height: 75}}
                    />
                    <Body>
                    <Text style={{fontWeight:'bold'}}>
                        Loan
                    </Text>
                    <Text>
                        {this.props.typeOfLoan}
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

export default CarLoan;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};