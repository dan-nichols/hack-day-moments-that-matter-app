import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';

import { CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import CarRego from "../molecules/CarRego";

class CarSummaryScreen extends Component {

    constructor () {
        super()
    }

    render () {

        return (
            <View style={styles.container}>

                <CardItem>
                    <CarRego regoDaysLeft={this.props.item.regoDaysLeft}
                             rego={this.props.item.rego} />
                </CardItem>
                <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={this.props.item.img} />
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