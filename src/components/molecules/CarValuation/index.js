import React, { Component } from 'react';
import {
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

import {
    Thumbnail,
    CardItem,
    Text,
    View
} from 'native-base';


export default CarValuation = ({valuation}) => {

    return (
        <CardItem>
            <TouchableOpacity title="" onPress={() => Linking.openURL("http://carsales.com.au")}  style={{flex:1}}>
                <View style={styles.container}>
                    <View style={styles.valuation}>
                        <Image source={require('../../../img/carsales.png')}
                               style={{ width: 100, height: 20}}/>
                        <Text style={{fontSize: 13,  fontFamily:'roboto', marginTop:3}}> valuation</Text>
                    </View>

                    <View style={styles.valuation}>
                        <Text style={styles.amount}>
                            {valuation.amount}
                        </Text>
                        <Text style={styles.explanation}>
                            Based on other vehicles of the same make, model, and year.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </CardItem>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    backdropView: {
        height: 25,
        width: 90,
        backgroundColor: '#c41727',
        marginRight: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    valuation: {
        flexDirection: 'row',
        marginTop: 3
    },
    amount: {
        fontSize: 25,
        fontWeight: 'bold',
        flex: 0.5
    },
    explanation: {
        fontSize: 10,
        flex: 0.5
    }
};
