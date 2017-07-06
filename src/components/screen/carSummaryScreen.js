import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import { CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import CarRego from "../molecules/CarRego";
import CarInsurance from "../molecules/CarInsurance/index";
import CarLoan from "../molecules/CarLoan/index";

class CarSummaryScreen extends Component {

    constructor () {
        super()
    }

    render () {
        return (
            <View style={styles.container}>
                <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={this.props.item.img} />
                </CardItem>
                <CardItem>
                    <CarRego daysLeft={this.props.item.carRego.daysLeft}
                             plateNumber={this.props.item.carRego.plateNumber}
                    />
                </CardItem>
                <CardItem>
                    <CarInsurance insurer={this.props.item.carInsurance.insurer}
                                  typeOfCover={this.props.item.carInsurance.typeOfCover}
                                  repaymentCycle={this.props.item.carInsurance.repaymentCycle}
                                  daysLeft={this.props.item.carInsurance.daysLeft}
                                  insurerImage={this.props.item.carInsurance.insurerImage}
                    />
                </CardItem>
                <CardItem>
                    <CarLoan
                        banker={this.props.item.carLoan.banker}
                        daysLeft={this.props.item.carLoan.daysLeft}
                        typeOfLoan={this.props.item.carLoan.typeOfLoan}
                        loanImage={this.props.item.carLoan.loanImage}
                    />
                </CardItem>
                <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{this.props.item.age}</Text>
                </CardItem>
            </View>
        )
    }
}

export default CarSummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
