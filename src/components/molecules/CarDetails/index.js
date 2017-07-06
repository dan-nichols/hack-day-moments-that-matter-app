import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

import { Tile } from 'react-native-elements';

class CarDetailsComponent extends Component {

    constructor () {
        super()
    }

    render () {
        // const insuredIcon = this.props.insured == 'true' ? "insured_icon.png" : "uninsured_icon.png"
        const captionMessage = `${this.props.make} ${this.props.model} ${this.props.year}`;

        return (
            <Tile 
                imageSrc={this.props.imagePath}
                title={this.props.name}
                titleStyle={navigationStyles.title}
                featured
                caption={captionMessage}
                captionStyle={navigationStyles.caption}
            />
        );
    }
};

export default CarDetailsComponent;

var navigationStyles = StyleSheet.create({
    title: {
        position: 'absolute',
        left:     10,
        top:      10,
    },
    caption: {
        position: 'absolute',
        bottom: 10,
        fontSize: 24,
    }
});