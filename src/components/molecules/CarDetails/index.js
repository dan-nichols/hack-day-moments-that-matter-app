import React, { Component } from 'react';
import {
    StyleSheet,
    Alert
} from 'react-native';


import { CardItem } from 'native-base';
import { Tile } from 'react-native-elements';

class CarDetailsComponent extends Component {

    constructor () {
        super()
    }

    editAlert() {
        Alert.alert(
                    'Edit Car Details',
                    null,
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                );
    }

    render () {
        // const insuredIcon = this.props.insured == 'true' ? "insured_icon.png" : "uninsured_icon.png"
        let caption = `${this.props.make} ${this.props.model} ${this.props.year}`;
        let title=`${this.props.name}`;

        return (

            <CardItem>
                <Tile
                    imageSrc={this.props.imagePath}
                    title={this.props.name}
                    titleStyle={navigationStyles.title}
                    featured
                    caption={caption}
                    captionStyle={navigationStyles.caption}
                    onPress={this.editAlert}
                    height={230}
                />
            </CardItem>
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