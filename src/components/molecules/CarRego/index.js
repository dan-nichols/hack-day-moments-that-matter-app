import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

import { Thumbnail, Left, Body, Right } from 'native-base';

class CarRego extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.daysLeft >= 10 ? "green" : "red";

        let numberPlateUri = 'https://d1iib2ym9qsjzj.cloudfront.net/api/plate?region=AU&text='+ this.props.plateNumber + '&ch=blue-dark&bg=euro-white&frame=1&width=1';

        return (
            <View style={styles.container}>
                <Left>
                    <Image source={{ uri: numberPlateUri }}
                           style={{marginLeft:-50, width: 300, height: 80}}
                    />
                    <Body>
                        <Text style={{color:daysLeftColor, marginLeft:-20 }}>
                            {this.props.daysLeft} Days Remaining
                        </Text>
                    </Body>
                </Left>
            </View>
        )
    }
}

export default CarRego;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});