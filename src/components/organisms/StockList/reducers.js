
import {STOCK_SELECT} from './action-types';

const SelectStockReducer = (state, action) => {

    switch (action.type) {
        case STOCK_SELECT:

            return {
                ...state,
                    selectedStock: action.payload === state.selectedStock ? {} : action.payload
            };

        default:
            return state
    }

};

//only when you have more than one reducer, need to combine all reducers
// const allReducers = combineReducers({likeDisLikeReducer})
export default SelectStockReducer;
