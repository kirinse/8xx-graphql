const { RESTDataSource } = require('apollo-datasource-rest');

class DataSource8xx extends RESTDataSource{
    constructor() {
        super();
        this.baseURL = process.env.REST_ADDRESS;
    }
    get(path, params = {}, init = {}){
        return super.get(path, params, {
            ...init,
            headers: {
                'App-Name': 'apollo',
                'App-Token': '7bc0fd1d9e046621f301d5f4ba27bd0c'
            }
        })
    }
}

module.exports = DataSource8xx;