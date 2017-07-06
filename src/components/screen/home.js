import React, {Component} from 'react';

import {
    DeckSwiper,
    Card
} from 'native-base';

import CarSummaryScreen from "./carSummaryScreen";
import NewMomentCard from "../molecules/NewMomentCard";

import { connect } from 'react-redux';


class Home extends Component {


    constructor() {
        super()
    }

    render() {
        console.log("home.js <----------------------------------------------------");
        console.log(this.props.DATA);
        return (
            <DeckSwiper
                dataSource={this.props.DATA}
                renderItem={item =>
                    item.id === 0 ?
                        <NewMomentCard/> :

                        <CarSummaryScreen item={item}/>
                }
          />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        DATA: state.DATA
    }
}

export default connect(mapStateToProps, null)(Home);

