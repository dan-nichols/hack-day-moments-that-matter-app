import React from 'react';

import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';
import { StockSelectedAction } from './actions';
import PriceDifferentialItem from '../../molecules/PriceDifferentialItem'


const StockList = ({stocks, selectedStock, StockSelectedAction}) => {

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(stocks);

    return (
        <ListView
            style={styles.horizontalSpacing}
            dataSource={dataSource}
            renderRow={(stock) =>
                <PriceDifferentialItem
                    name={stock.company}
                    amount={stock.stockPrice}
                    diff={stock.change}
                    clickAction={() => StockSelectedAction(stock)}
                    selected={stock === selectedStock}
                />
            }
        />
    );
};

const mapStateToProps = (state) => {
    return {
        selectedStock: state.selectedStock
    };
};

function mapDispatchToProps (dispatch) {
    return bindActionCreators({StockSelectedAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StockList);
