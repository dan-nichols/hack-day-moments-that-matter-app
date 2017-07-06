import React, {Component} from 'react';

import {
    DeckSwiper,
    Card
} from 'native-base';

import CarSummaryScreen from "./carSummaryScreen";
import NewMomentCard from "../molecules/NewMomentCard";

// test data
const DATA = [
    {
        id: 1,
        nickname: 'Herbie',
        make: 'Honda Civic',
        model: 'DX',
        age: 1990,
        img: require('../../img/civic.jpg'),
        carRego : {
            plateNumber:'AUS000',
            daysLeft:132
        },
        carInsurance : {
          typeOfCover:'Third Party',
          repaymentCycle:'Yearly',
          repaymentAmount: 516.34,
          daysLeft:3,
          insurerImage:require('../../img/aami-logo.jpg')
        },
        carLoan : {
          typeOfLoan: 'Special Car Loan',
          repaymentAmount: 46.34,
          daysLeft:25,
          loanImage: require('../../img/suncorp-logo.jpg'),
        },
        valuation: {
            amount: '$8,000'
        }
    },
    {
      id: 2,
      nickname: 'Tony',
      make: 'Subaru Impreza',
      model: 'Exel',
      age: 2002,
      img: require('../../img/impreza.jpg'),
      carRego : {
          plateNumber:'REX123',
          daysLeft:7
      },
      carInsurance : {
          typeOfCover:'Comprehensive',
          repaymentCycle:'Monthly',
          repaymentAmount: 36.34,
          daysLeft:27,
          insurerImage:require('../../img/suncorp-logo.jpg')
      },
      carLoan : {
          typeOfLoan: 'Personal Loan',
          daysLeft:8,
          repaymentAmount: 136.34,
          loanImage: require('../../img/suncorp-logo.jpg'),
      },
      valuation: {
          amount: '$15,000'
      }
    },
    {
        id: 0
    }
];


class Home extends Component {


    constructor() {
        super()
    }

    render() {

        return (
            <DeckSwiper
                dataSource={DATA}
                renderItem={item =>
                    item.id === 0 ?
                        <NewMomentCard/> :

                        <CarSummaryScreen item={item}/>
                }
          />
        );
    }
}


export default Home;

