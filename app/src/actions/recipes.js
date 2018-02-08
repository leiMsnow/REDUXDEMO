import * as types from './types';
import Api from '../lib/api';

export function fetchRecipes(ingredients) {
    return (dispatch, getState) => {
        const params = [
            `ingredients=${encodeURIComponent(ingredients)}`,
            'fillIngredients=false',
            'limitLicense=false',
            'number=20',
            'ranking=1',
        ];
        return Api.get({
            route: `/recipes/findByIngredients?${params.join('&')}`,
        }).then(recipes => {
            dispatch(setSearchedRecipes({ recipes }))
        }).catch((ex) => {
            console.log(ex);
        })
    }
}

export function setSearchedRecipes({ recipes }) {
    return {
        type: types.SET_SEARCHED_RECIPES,
        recipes
    }
}

// export function addRecipe() {
//     return {
//         type: types.ADD_RECIPE,
//     }
// }