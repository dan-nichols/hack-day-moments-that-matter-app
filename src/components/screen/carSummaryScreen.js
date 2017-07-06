import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';


import { CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

class CarSummaryScreen extends Component {

    constructor () {
        super()
    }

    render () {

        return (
            <View style={styles.container}>

                <CardItem>
                    <Left>
                        <Thumbnail source={{uri: this.props.item.uri}} />
                        <Body>
                        <Text>{this.props.item.text}</Text>
                        <Text note>NativeBase</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image style={{ height: 300, flex: 1 }} source={{uri: this.props.item.uri}} />
                </CardItem>
                <CardItem>
                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                    <Text>{this.props.item.age}</Text>
                </CardItem>
            </View>
        )
    }
}

CarSummaryScreen.navigationOptions = {title: 'CarSummaryScreen'};

export default CarSummaryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});