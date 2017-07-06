import React, { Component } from 'react';


import { Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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

            <Card style={styles.container}>

                <CarDetails name={this.props.item.nickname}
                            imagePath={this.props.item.img}
                            make={this.props.item.make}
                            model={this.props.item.model}
                            year={this.props.item.age}
                            insured={this.props.item.insured}/>


                <CarRego rego={this.props.item.carRego}/>

                <CarInsurance typeOfCover={this.props.item.carInsurance.typeOfCover}
                              repaymentCycle={this.props.item.carInsurance.repaymentCycle}
                              daysLeft={this.props.item.carInsurance.daysLeft}
                              insurerImage={this.props.item.carInsurance.insurerImage}
                              repaymentAmount={this.props.item.carInsurance.repaymentAmount}/>

                <CarLoan daysLeft={this.props.item.carLoan.daysLeft}
                         typeOfLoan={this.props.item.carLoan.typeOfLoan}
                         loanImage={this.props.item.carLoan.loanImage}
                         repaymentAmount={this.props.item.carLoan.repaymentAmount}/>
            </Card>
        )
    }
}

export default CarSummaryScreen;

const styles = {
    container: {
        elevation: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
};
