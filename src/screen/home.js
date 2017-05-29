import React, {Component} from 'react';
import {
    Button,
    Text,
    View,
    Alert
} from 'react-native';
import styles from './styles';
import PriceDifferentialItem from "suncorp-react-native-components/src/components/molecules/PriceDifferentialItem/index";

export default class Home extends Component {

    constructor({navigation}) {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to the stencil</Text>
                <Button
                    title="Screen1"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
                <Button
                    title="Screen2"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                />
                <PriceDifferentialItem name="asdasd" amount="1" clickAction={() => { Alert.alert(
                    'Alert Title',
                    'My Alert Msg',
                    [
                        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                ) }}/>
            </View>
        );
    }
}
