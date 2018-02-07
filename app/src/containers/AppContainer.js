import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

class AppContainer extends Component {

    addRecipe() {
        debugger;
        this.props.addRecipe();
    }

    render() {
        return (
            <View>
                <Text style={{ marginTop: 20 }}>
                    I am App Container! Recipe Count: {this.props.recipeCount}
                </Text>
                <TouchableHighlight onPress={() => { this.addRecipe() }}>
                    <Text>Add recipe</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function mapDispatchToPros(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
    return {
        recipeCount: state.recipeCount
    }
}, mapDispatchToPros)(AppContainer);