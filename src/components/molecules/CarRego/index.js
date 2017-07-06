import React, { Component } from 'react';
import {
    Image,
    Dimensions
} from 'react-native';

import {
    Thumbnail,
    CardItem,
    Left,
    Body,
    Right,
    Text
} from 'native-base';


const SCREEN_WIDTH = Dimensions.get('window').width


class CarRego extends Component {

    constructor () {
        super()
    }

    render () {

        let daysLeftColor = this.props.rego.daysLeft >= 10 ? "green" : "red";

        let numberPlateUri = 'https://d1iib2ym9qsjzj.cloudfront.net/api/plate?region=AU&text='+ this.props.rego.plateNumber + '&ch=blue-dark&bg=euro-white&frame=1&width=1';

        return (
            <CardItem style={styles.container}>
                <Left>
                    <Image source={{ uri: numberPlateUri }}
                           style={{ width: SCREEN_WIDTH, height: 75}}
                    />
                    <Body>
                        <Text style={{color:daysLeftColor}}>
                            {this.props.rego.daysLeft} Days Remaining
                        </Text>
                    </Body>
                </Left>
            </CardItem>
        )
    }
}

export default CarRego;

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};