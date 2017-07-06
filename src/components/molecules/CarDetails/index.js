import React, { Component } from 'react';
import {
    StyleSheet,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EditNameAction } from './actions'

import { CardItem } from 'native-base';
import { Tile } from 'react-native-elements';
import Prompt from 'react-native-prompt';



class CarDetailsComponent extends Component {

    constructor (props) {
        super()
        this.state = {
            editNamePromptVisible: false,
            editMakePromptVisible: false,
            editModelPromptVisible: false,
            editYearPromptVisible: false
        }
    }

    editAlert(state) {
        Alert.alert(
                    'Edit Car Details',
                    null,
                    [
                        {text: 'Edit Nickname', onPress: () => {
                            console.log('Edit Nickname')
                            this.setState({ editNamePromptVisible: true });
                        }},
                        {text: 'Edit Image', onPress: () => {
                            console.log('Edit Image');
                        }},
                        {text: 'Edit Car Make', onPress: () => {
                            console.log('Edit Car Make')
                            this.setState({ editMakePromptVisible: true });
                        }},
                        {text: 'Edit Car Model', onPress: () => {
                            console.log('Edit Car Model')
                            this.setState({ editModelPromptVisible: true });
                        }},
                        {text: 'Edit Car Year', onPress: () => {
                            console.log('Edit Car Year')
                            this.setState({ editYearPromptVisible: true });
                        }},
                        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}
                    ],
                    { cancelable: false }
                );
    }

    render () {
        // const insuredIcon = this.props.insured == 'true' ? "insured_icon.png" : "uninsured_icon.png"
        

        let caption = `${this.props.make} ${this.props.model} ${this.props.year}`;

        console.log('Test')

        return (

            <CardItem>
                <Tile
                    imageSrc={this.props.imagePath}
                    title={this.props.name}
                    titleStyle={navigationStyles.title}
                    featured
                    caption={caption}
                    captionStyle={navigationStyles.caption}
                    height={230}
                    onPress={() => this.editAlert(this.state)}
                />

                <Prompt
                    title="Edit Name"
                    placeholder={this.props.name}
                    defaultValue={this.props.name}
                    visible={this.state.editNamePromptVisible}
                    onCancel={ () => this.setState({
                        editNamePromptVisible: false
                    }) }
                    onSubmit={ (value) => {
                        this.setState({
                            editNamePromptVisible: false, 
                        });
                        this.props.dispatchEditName({id:this.props.id, name:value});

                     }}
                />

                <Prompt
                    title="Edit Car Make"
                    placeholder={this.props.make}
                    defaultValue={this.props.make}
                    visible={this.state.editMakePromptVisible}
                    onCancel={ () => this.setState({
                        editMakePromptVisible: false
                    }) }
                    onSubmit={ (value) => this.setState({
                        editMakePromptVisible: false,
                        make: `${value}`
                    }) }
                />

                <Prompt
                    title="Edit Car Model"
                    placeholder={this.props.model}
                    defaultValue={this.props.model}
                    visible={this.state.editModelPromptVisible}
                    onCancel={ () => this.setState({
                        editModelPromptVisible: false
                    }) }
                    onSubmit={ (value) => this.setState({
                        editModelPromptVisible: false,
                        model: `${value}`
                    }) }
                />

                <Prompt
                    title="Edit Car Year"
                    placeholder="year"
                    defaultValue="year"
                    visible={this.state.editYearPromptVisible}
                    onCancel={ () => this.setState({
                        editYearPromptVisible: false
                    }) }
                    onSubmit={ (value) => this.setState({
                        editYearPromptVisible: false,
                        year: `${value}`
                    }) }
                />
            </CardItem>
        );
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditName: (inputValues) => dispatch(EditNameAction(inputValues))
    }
}

export default connect(null, mapDispatchToProps)(CarDetailsComponent);

var navigationStyles = StyleSheet.create({
    title: {
        position: 'absolute',
        left:     10,
        top:      10,
    },
    caption: {
        position: 'absolute',
        bottom: 10,
        fontSize: 24,
    }
});