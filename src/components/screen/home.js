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
          daysLeft:3,
          insurerImage:require('../../img/aami-logo.jpg')
        },
        carLoan : {
          typeOfLoan: 'Special Car Loan',
          daysLeft:3,
          loanImage: require('../../img/suncorp-logo.jpg'),
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
          plateNumber:'USA911',
          daysLeft:7
      },
      carInsurance : {
          typeOfCover:'Comprehensive',
          repaymentCycle:'Monthly',
          daysLeft:27,
          insurerImage:require('../../img/suncorp-logo.jpg')
      },
      carLoan : {
          typeOfLoan: 'Personal Loan',
          daysLeft:26,
          loanImage: require('../../img/suncorp-logo.jpg'),
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

                        <Card style={{elevation: 3}}>
                            <CarSummaryScreen item={item}/>
                        </Card>
                }
          />
        );
    }
}


export default Home;

