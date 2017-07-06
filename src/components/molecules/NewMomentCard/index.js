
import React from 'react';

import {
    Button,
    DeckSwiper,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    View } from 'native-base';

import styles from './styles';


export default PriceDifferentialItem = ({name, amount, diff, clickAction, selected}) => {

    return (
        <Card style={styles.card}>
            <View style={styles.container}>
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
            </View>
        </Card>
    );
};

