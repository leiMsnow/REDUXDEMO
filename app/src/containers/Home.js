import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredientsInput: ''
        }
    }
    searchPressed() {
        this.props.fetchRecipes(this.state.ingredientsInput);
    }

    recipes() {
        return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
    }

    render() {
        return (
            <View style={styles.scene}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Ingredients (comma delimited)'
                        onChangeText={ingredientsInput => this.setState({ ingredientsInput })}
                        value={this.state.ingredientsInput}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.searchPressed()}>
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {
                        this.recipes().map(recipe => {
                            return <View key={recipe.id} style={styles.resultContainer}>
                                <Image source={{ uri: recipe.image }} style={styles.resultImage} />
                                <Text style={styles.reultText}>{recipe.title}</Text>
                            </View>
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    scrollContainer: {
        marginTop: 20,
    },
    resultContainer: {
        marginBottom: 10,
    },
    resultImage: {
        height: 150,
        borderRadius: 4,
    },
    reultText: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        fontSize: 18,
        padding: 4,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    searchContainer: {
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        borderColor: '#000',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 4,
        padding: 4,
    },
    buttonContainer: {
        height: 40,
        width: 80,
        borderRadius: 4,
        backgroundColor: '#5288fb',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


function mapStateToProps(state) {
    return {
        searchedRecipes: state.searchedRecipes
    }
}

export default connect(mapStateToProps)(Home)