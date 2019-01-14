const { RESTDataSource } = require('apollo-datasource-rest');

class DataSource8xx extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = process.env.REST_ADDRESS;
        // this.baseURL = 'https://api.8xxbet.com/'
    }
    get(path, params = {}, init = {}){
        return super.get(path, params, {
            ...init,
            headers: {
                ...(init.headers ? init.headers : {}),
                'App-Name': 'apollo',
                'App-Token': '7bc0fd1d9e046621f301d5f4ba27bd0c'
            }
        })
    }
    getWithToken(path, params, authorization){
        return this.get(path, params, {
            headers: {
                authorization: authorization ? authorization : ''
            }
        })
    }
}

module.exports = DataSource8xx;