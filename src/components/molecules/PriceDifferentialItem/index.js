import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default PriceDifferentialItem = ({name, amount, diff, clickAction, selected}) => {

    const diffColourStyle = diff > 0 ? styles.diffPositive : styles.diffNegative;

    return (
        <TouchableOpacity style={[styles.container, selected ? styles.selected : {} ]}
                          onPress={() => clickAction()}>

                <Text style={[styles.itemFont, styles.verticalSpacing, styles.name]}>
                    {name}
                </Text>

                <Text style={[styles.itemFont, styles.verticalSpacing, styles.amount]}>
                    ${amount}
                </Text>

                <Text style={[styles.itemFont, styles.verticalSpacing, styles.diff, diffColourStyle]}>
                    {diff}%
                </Text>

        </TouchableOpacity>
    );
};
