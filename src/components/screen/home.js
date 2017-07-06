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
  { id: 1, text: 'Honda Civic', age: 1990, regoDaysLeft:247, rego:'MRP123', img: require('../../img/civic.jpg') },
  { id: 2, text: 'Subaru Impreza', age: 2002, regoDaysLeft:8, rego:'PFG654', img: require('../../img/impreza.jpg') },
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

