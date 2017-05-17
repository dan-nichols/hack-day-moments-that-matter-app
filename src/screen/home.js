import React, {Component} from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import styles from './styles';

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
            </View>
        );
    }
}
