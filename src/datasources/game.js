const DataSource8xx = require('./DataSource8xx');

class GameAPI extends DataSource8xx {
    gameReducer(game){
        return {
            ...game,
            name: JSON.stringify(game.name),
            brand: game.brand ? {...game.brand, name: JSON.stringify(game.brand.name)} : {code: 'AG'},
            categories: game.categories ? game.categories.map(item => ({...item, name: JSON.stringify(item.name)})) : []
        }
    }
    async getRecommendGames(type) {
        let res
        switch(type){
            case 'SLOTS':
                res = await this.get('search', {product_code: 'SLOTS', is_recommend: 1});
                return res ? res.data.SLOTS.slice(0, 30).map(l => this.gameReducer(l)) : [];
            case 'LIVE':
                res = await this.get('search', {product_code: 'LIVE', is_recommend: 1});
                return res && res.data.LIVE ? res.data.LIVE.slice(0, 30).map(l => this.gameReducer(l)) : [];
            default:
                res = await this.get('search', {brands: type, is_recommend: 1});
                return res ? (res.data.LIVE ? res.data.LIVE : []).concat(res.data.SLOTS).slice(0, 30).map(l => this.gameReducer(l)) : [];
        }
    }
    async getNewest(){
        const res = await this.get('search', {product_code: 'SLOTS', sort: 'release_desc'});
        return res ? res.data.SLOTS.slice(0, 30).map(l => this.gameReducer(l)) : [];
    }
    async getBest(){
        const res = await this.get('search', {product_code: 'SLOTS', sort: 'popularity'});
        return res ? res.data.SLOTS.slice(0, 30).map(l => this.gameReducer(l)) : [];
    }
    async getDiscover(){
        const res = await this.get('search', {product_code: 'SLOTS', sort: 'popularity', page: 2});
        return res ? res.data.SLOTS.slice(0, 10).map(l => this.gameReducer(l)) : [];
    }
    async getHeart(){
        return [
            {"id":"b06af710-093a-11e9-9614-17b4ff231e7b","name":{"zh-TW":"\u9ec3\u91d1\u82b1\u82b1\u516c\u5b50","zh-CN":"\u9ec4\u91d1\u82b1\u82b1\u516c\u5b50","en-GB":"Playboy Gold"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"MG","name":{"en-GB":"MicroGaming","zh-CN":"MG","zh-TW":"MG"}},"product":"SLOTS","image":"aac0960f808960d3f0b4fdb6a8b47579","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":true,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2018-12-26T18:18:48+00:00","updatedAt":"2019-01-08T19:22:51+00:00"},"lines":100,"hasJackpot":false},
            {"id":"a631af90-a1de-11e7-9224-990ba9695696","name":{"en-GB":"Golden Legend","zh-CN":"\u9ec4\u91d1\u4f20\u5947","zh-TW":"\u9ec4\u91d1\u4f20\u5947"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":false,"iosApp":true},"brand":{"code":"PNG","name":{"en-GB":"Playn'Go","zh-CN":"PNG","zh-TW":"PNG"}},"product":"SLOTS","image":"2a613b4d5d99b99532ccda74040ababb","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-08-28T13:00:21+00:00","updatedAt":"2018-12-26T00:21:03+00:00"},"lines":50,"hasJackpot":false},
            {"id":"5a94c460-b7f7-11e7-96f9-31309f5d63e3","name":{"en-GB":"Haunted House","zh-CN":"\u9b3c\u5c4b","zh-TW":"\u9b3c\u5c4b"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"447196f99bac46a6c8d4f8a5e0a6a807","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"663ed9a0-5924-11e8-9c65-89e2a6f40f28","name":{"zh-CN":"\u72c2\u62fd\u70ab\u9177","zh-TW":"\u72c2\u62fd\u70ab\u9177","en-GB":"cool"},"timestamps":{"createdAt":"2018-05-16T16:15:50+00:00","updatedAt":"2018-05-16T16:15:50+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:46+00:00","updatedAt":"2018-06-13T20:12:12+00:00"},"lines":5,"hasJackpot":false},
            {"id":"aa5ead30-a1dd-11e7-8bf5-758c66d012c4","name":{"en-GB":"High Roller","zh-CN":"\u5927\u8c6a\u5ba2","zh-TW":"\u5927\u8c6a\u5ba2"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":false,"iosApp":true},"brand":{"code":"AG","name":{"en-GB":"AsiaGaming","zh-CN":"AG","zh-TW":"AG"}},"product":"SLOTS","image":"cf87772c2350b9084dc047b2b7249dcb","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"c49b8af0-5926-11e8-933a-dbd9673d6b8d","name":{"zh-TW":"\u684c\u9762\u8f2a\u76e4","en-GB":"Desktop Roulette","zh-CN":"\u684c\u9762\u8f6e\u76d8"},"timestamps":{"createdAt":"2018-05-16T16:32:47+00:00","updatedAt":"2018-05-16T16:32:47+00:00"}}],"timestamps":{"createdAt":"2017-08-28T12:58:47+00:00","updatedAt":"2019-01-09T22:48:19+00:00"},"lines":0,"hasJackpot":false},
            {"id":"ca8c5660-a1dd-11e7-8805-5312d7fb7a1a","name":{"en-GB":"Playboy Baccarat Single Player","zh-CN":"\u767e\u5bb6\u4e50\u5355\u4eba\u82b1\u82b1\u516c\u5b50\u684c","zh-TW":"\u767e\u5bb6\u6a02\u55ae\u4eba\u82b1\u82b1\u516c\u5b50\u684c"},"demo":{"flash":false,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":false,"iosApp":true},"brand":{"code":"MG","name":{"en-GB":"MicroGaming","zh-CN":"MG","zh-TW":"MG"}},"product":"LIVE","image":"51d4b93b15c1ee6f4b0906634da6eaec","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":true,"categories":[],"timestamps":{"createdAt":"2017-08-28T12:58:52+00:00","updatedAt":"2019-01-08T17:31:46+00:00"}},
            {"id":"560ab820-b7f7-11e7-9ac3-5df2c3b1c123","name":{"en-GB":"Pharaoh's Secrets","zh-CN":"\u6cd5\u8001\u738b\u7684\u79d8\u5bc6","zh-TW":"\u6cd5\u8001\u738b\u7684\u79d8\u5bc6"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"1b3214993979bd01f8df8a1d5427ea43","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"927f2c40-5924-11e8-bb86-d9a434dfdccf","name":{"en-GB":"Mystery Story","zh-TW":"\u795e\u79d8\u7269\u8a9e","zh-CN":"\u795e\u79d8\u7269\u8bed"},"timestamps":{"createdAt":"2018-05-16T16:17:04+00:00","updatedAt":"2018-05-16T16:17:04+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:38+00:00","updatedAt":"2018-06-14T16:39:43+00:00"},"lines":20,"hasJackpot":false},
            {"id":"bf2d6770-a1dd-11e7-be4a-09d650153932","name":{"en-GB":"Baccarat (AGQ)","zh-CN":"\u767e\u5bb6\u4e50 (\u65d7\u8230\u5385)","zh-TW":"\u767e\u5bb6\u6a02 (\u65d7\u8266\u5ef3)"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":false,"iosApp":true},"brand":{"code":"AG","name":{"en-GB":"AsiaGaming","zh-CN":"AG","zh-TW":"AG"}},"product":"LIVE","image":"7f0284f457f07566ed7fdcc5f915252b","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":true,"categories":[],"timestamps":{"createdAt":"2017-08-28T12:58:42+00:00","updatedAt":"2019-01-08T17:25:10+00:00"}},
        ].map(l => this.gameReducer(l))
    }
}

module.exports = GameAPI;