
import {STOCK_SELECT} from './action-types';

export const StockSelectedAction = (stock) => {
    return {
        type: STOCK_SELECT,
        payload: stock
    }
};
