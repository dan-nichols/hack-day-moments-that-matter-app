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
import CarDetails from "../molecules/CarDetails";

class CarSummaryScreen extends Component {

    constructor () {
        super()
    }

    render () {
        return (
            <View style={styles.container}>

                <CardItem>
                    <CarDetails name={this.props.item.nickname} 
                                imagePath={this.props.item.img} 
                                make={this.props.item.make} 
                                model={this.props.item.model} 
                                year={this.props.item.year} 
                                insured={this.props.item.insured} 
                    />
                </CardItem>


                <CarRego daysLeft={this.props.item.carRego.daysLeft}
                         plateNumber={this.props.item.carRego.plateNumber} />


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
