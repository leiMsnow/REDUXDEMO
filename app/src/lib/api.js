class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'DataType': 'json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Mashape-key': 'ZZUpn1n6armsh5eCQ6hJ8wvw8lSbp18LgQ7jsnX5lKssTjKzWE',
        }
    }

    static get(opts) {
        return this.doFetch({ ...opts, ...{ method: 'GET' } });
    }

    static post(opts) {
        return this.doFetch({ ...opts, ...{ method: 'POST' } });
    }

    static doFetch(opts) {
        const host = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com'
        const url = `${host}${opts.route}`;
        console.log(url);
        let options = Object.assign({ method: opts.method }, opts.body ? { body: JSON.stringify(opts.body) } : null);
        options.headers = { ...Api.headers(), ...opts.headers };
        return fetch(url, options).then((resp) => {
            let json = resp.json();
            if (resp.ok) {
                return json;
            }
            return json.then(error => { throw error });
        })
    }
}

export default Api;
