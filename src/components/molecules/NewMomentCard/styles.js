
import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height

export default {
    card: {
        elevation: 3,
        height: SCREEN_HEIGHT - 30
    },
    button: {
        flex: 1
    },
    cardItem: {
        flexDirection:'row'
    }
};
