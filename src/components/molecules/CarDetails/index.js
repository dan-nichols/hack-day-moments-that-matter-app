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

        return (
            <Tile 
                imageSrc={this.props.imagePath}
                title={this.props.name}
                titleStyle={navigationStyles.title}
                featured
                caption="{this.props.make} {this.props.model} {this.props.year}"
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
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     }
// });

// import styles from './styles';

// export default PriceDifferentialItem = ({name, amount, diff, clickAction, selected}) => {

//     const diffColourStyle = diff > 0 ? styles.diffPositive : styles.diffNegative;

//     return (
//         <TouchableOpacity style={[styles.container, selected ? styles.selected : {} ]}
//                           onPress={() => clickAction()}>

//                 <Text style={[styles.itemFont, styles.verticalSpacing, styles.name]}>
//                     {name}
//                 </Text>

//                 <Text style={[styles.itemFont, styles.verticalSpacing, styles.amount]}>
//                     ${amount}
//                 </Text>

//                 <Text style={[styles.itemFont, styles.verticalSpacing, styles.diff, diffColourStyle]}>
//                     {diff}%
//                 </Text>

//         </TouchableOpacity>
//     );
// };