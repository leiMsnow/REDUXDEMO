class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'DataType': 'json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Mashape-key': 'qJUsbP6zFGmsh60qUu4Swdr6H4Lvp1xJ8Ldjsns0F0kN40P57g',
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT');
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST');
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE');
    }

    static xhr(route, params, verb) {
        const host = 'https//spoonacular-recipe-food-nutrition-v1.p.mashape.com'
        const url = `${host}${route}`;
        let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = Api.headers();
        return fetch(url, options).then((resp) => {
            let json = resp.json();
            if (resp.ok) {
                return json;
            }
            return json.then(error => { throw err });
        })
    }
}

export default Api;
