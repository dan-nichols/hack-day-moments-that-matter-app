import React from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon'
import Home from './../../src/screen/Home';

describe('<Home />', () => {

    it('should have two buttons', () => {

        const wrapper = shallow(<Home/>);

        expect(wrapper.find('Button').length).to.equal(2);
    });

    it('should have a button with title Screen1', () => {

        const wrapper = shallow(<Home/>);

        let button = wrapper.find('Button');

        expect(button.at(0).prop("title")).to.equal("Screen1");

    });

    it('should have a button with title Screen2', () => {

        const wrapper = shallow(<Home/>);

        let button = wrapper.find('Button');

        expect(button.at(1).prop("title")).to.equal("Screen2");

    });

    it('press should invoke the onPress handler for button 1 passed as props', () => {

        const button1Event = sinon.spy();

        let navigation = {};

        navigation.navigate = button1Event;

        const wrapper = shallow(<Home navigation={navigation}/>);

        let button = wrapper.find('Button').at(0);

        button.simulate('press');

        expect(button1Event.calledOnce).to.be.true;
        expect(button1Event.getCalls()[0].args).to.deep.equals(['Screen1']);
    });

    it('press should invoke the onPress handler for button 2 passed as props', () => {

        const button1Event = sinon.spy();

        let navigation = {};

        navigation.navigate = button1Event;

        const wrapper = shallow(<Home navigation={navigation}/>);

        let button = wrapper.find('Button').at(1);

        button.simulate('press');

        expect(button1Event.calledOnce).to.be.true;
        expect(button1Event.getCalls()[0].args).to.deep.equals(['Screen2']);
    });

});