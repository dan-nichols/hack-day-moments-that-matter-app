import React, {Component} from 'react';

import { StyleSheet, Dimensions } from 'react-native';
import {
    Button,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Icon } from 'native-base';

import CarSummaryScreen from "./carSummaryScreen";



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
          insurer:'SUNCORP',
          typeOfCover:'Third Party',
          repaymentCycle:'Yearly',
          daysLeft:3,
          insurerImage:require('../../img/aami-logo.jpg')
        },
        carLoan : {
          banker:'NAB',
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
          insurer:'AAMI',
          typeOfCover:'Comprehensive',
          repaymentCycle:'Monthly',
          daysLeft:27,
          insurerImage:require('../../img/suncorp-logo.jpg')
      },
      carLoan : {
          banker:'ANZ',
          typeOfLoan: 'Personal Loan',
          daysLeft:26,
          loanImage: require('../../img/suncorp-logo.jpg'),
      }
    },
    {
        id: 0
    }
];


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


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
                        <Card style={styles.card}>
                            <CardItem header>
                                <Text>What matters to you?</Text>
                            </CardItem>

                            <CardItem style={styles.cardItem}>
                                <Button style={styles.button} block>
                                    <Text>New Car</Text>
                                </Button>
                            </CardItem>

                            <CardItem style={styles.cardItem}>
                                <Button style={styles.button} block>
                                    <Text>New House</Text>
                                </Button>
                            </CardItem>

                            <CardItem style={styles.cardItem}>
                                <Button style={styles.button} block>
                                    <Text>New Business</Text>
                                </Button>
                            </CardItem>
                        </Card> :

                        <Card style={{elevation: 3}}>
                            <CarSummaryScreen item={item}/>
                        </Card>
                }
          />
        );
    }
}


const styles = {
    card: {
        elevation: 3,
        height: SCREEN_HEIGHT - 30
    },
    button: {
        flex: 1
    },
    cardItem: {
        flexDirection:'row'
    }
};


export default Home;

