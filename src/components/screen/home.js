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


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height

// test data
const DATA = [
  { id: 1, text: 'Honda Civic', age: 1990, img: require('../../img/civic.jpg') },
  { id: 2, text: 'Subaru Impreza', age: 2002, img: require('../../img/impreza.jpg') },
  { id: 0, text: 'Subaru Impreza', age: 2002, img: require('../../img/impreza.jpg') }
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

                        <Card style={styles.card}>
                            <CarSummaryScreen item={item}/>
                        </Card>
                }
          />

        );
    }

}


const styles = {
    card: {
        height: SCREEN_HEIGHT - 30,
        elevation: 3
    },
    button: {
        flex: 1
    },
    cardItem: {
        flexDirection:'row'
    }
};


export default Home;

