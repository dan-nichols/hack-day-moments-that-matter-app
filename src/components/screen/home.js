import React, {Component} from 'react';
import {
    Button,
    Dimensions,
    View,
    Alert
} from 'react-native';
import { DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

import styles from './styles';
import CarSummaryScreen from "./carSummaryScreen";



// test data
const DATA = [
  {
    id: 1,
    text: 'Honda Civic',
    age: 1990,
    img: require('../../img/civic.jpg'),
    carRego : {
        plateNumber:'AUS000',
        daysLeft:132
    },
    carInsurance : {
      insurer:'SUNCORP',
      typeOfCover:'Third Party',
      repaymentCycle:'Yearly',
      daysLeft:3,
      insurerImage:require('../../img/aami-logo.jpg')
    }
  },
  {
    id: 2,
    text: 'Subaru Impreza',
    age: 2002,
    img: require('../../img/impreza.jpg'),
    carRego : {
        plateNumber:'USA911',
        daysLeft:7
    },
    carInsurance : {
        insurer:'AAMI',
        typeOfCover:'Comprehensive',
        repaymentCycle:'Monthly',
        daysLeft:27,
        insurerImage:require('../../img/suncorp-logo.jpg')
    }
  },
];


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height


class Home extends Component {


    constructor({navigation}) {
        super()
    }

    render() {

        return (
            <DeckSwiper
                dataSource={DATA}
                renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CarSummaryScreen item={item}/>
              </Card>
            }
          />

        );
    }

}

export default Home;

