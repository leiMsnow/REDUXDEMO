import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default class Peckish extends Component {
    render() {
        console.log('Hello, World!');
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>
                    Hello, Welcome to Redux!
                </Text>
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructions: {
        fontSize: 18,
    }
})