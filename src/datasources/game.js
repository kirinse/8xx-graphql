const { RESTDataSource } = require('apollo-datasource-rest');

class GameAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.8xxbet.com/';
    }
    gameReducer(game){
        return {
            ...game,
            name: JSON.stringify(game.name),
            brand: game.brand ? {...game.brand, name: JSON.stringify(game.brand)} : {code: 'AG'},
            categories: game.categories ? game.categories.map(item => ({...item, name: JSON.stringify(item.name)})) : []
        }
    }
    async getRecommendGames(type) {
        let res
        switch(type){
            case 'SLOTS':
                res = await this.get('games', {page: 1, sort: 'popularity'});
                return res ? res.data.slice(0, 30).map(l => this.gameReducer(l)) : [];
            case 'LIVE':
                res = await this.get('live');
                return res ? res.data.reduce((concatedArr, brand) => concatedArr.concat(brand.games), []).map(l => this.gameReducer(l)) : [];
            default:
                res = await this.get('games', {page: 1, sort: 'popularity'});
                return res ? res.data.slice(0, 30).map(l => this.gameReducer(l)) : [];
        }
        
        
    }
}

module.exports = GameAPI;