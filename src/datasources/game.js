const DataSource8xx = require('./DataSource8xx');

class GameAPI extends DataSource8xx {
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
                res = await this.get('search', {product_code: 'SLOTS', is_recommend: 1});
                return res ? res.data.SLOTS.slice(0, 30).map(l => this.gameReducer(l)) : [];
            case 'LIVE':
                res = await this.get('search', {product_code: 'LIVE', is_recommend: 1});
                return res && res.data.LIVE ? res.data.LIVE.slice(0, 30).map(l => this.gameReducer(l)) : [];
            default:
                res = await this.get('search', {brands: type});
                return res ? res.data.SLOTS.concat(res.data.LIVE).slice(0, 30).map(l => this.gameReducer(l)) : [];
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
            {"id":"5c734e00-b7f7-11e7-960f-87267d0f9d38","name":{"en-GB":"Funky Monkey","zh-CN":"\u53e4\u602a\u7334\u5b50","zh-TW":"\u65f6\u5c1a\u7334\u5b50"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"36986009ee038df7b8ff98b41595f5fa","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:49+00:00","updatedAt":"2018-06-13T20:20:52+00:00"},"lines":1,"hasJackpot":false},
            {"id":"5dc18320-b7f7-11e7-bd56-23abd62a6827","name":{"en-GB":"Fortune Day","zh-CN":"\u5e78\u8fd0\u65e5","zh-TW":"\u5e78\u8fd0\u65e5"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":false,"androidApp":false,"windowsDownload":true,"iosApp":false},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"a7f7a069352fb9e616063f7eb98b62e3","imageServer":1,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"663ed9a0-5924-11e8-9c65-89e2a6f40f28","name":{"zh-CN":"\u72c2\u62fd\u70ab\u9177","zh-TW":"\u72c2\u62fd\u70ab\u9177","en-GB":"cool"},"timestamps":{"createdAt":"2018-05-16T16:15:50+00:00","updatedAt":"2018-05-16T16:15:50+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:51+00:00","updatedAt":"2018-06-01T16:30:40+00:00"},"lines":20,"hasJackpot":false},
            {"id":"560ab820-b7f7-11e7-9ac3-5df2c3b1c123","name":{"en-GB":"Pharaoh's Secrets","zh-CN":"\u6cd5\u8001\u738b\u7684\u79d8\u5bc6","zh-TW":"\u6cd5\u8001\u738b\u7684\u79d8\u5bc6"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"1b3214993979bd01f8df8a1d5427ea43","imageServer":3,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"927f2c40-5924-11e8-bb86-d9a434dfdccf","name":{"en-GB":"Mystery Story","zh-TW":"\u795e\u79d8\u7269\u8a9e","zh-CN":"\u795e\u79d8\u7269\u8bed"},"timestamps":{"createdAt":"2018-05-16T16:17:04+00:00","updatedAt":"2018-05-16T16:17:04+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:38+00:00","updatedAt":"2018-06-14T16:39:43+00:00"},"lines":20,"hasJackpot":false},
            {"id":"50626d00-b7f7-11e7-bb93-b78c5b3c2da3","name":{"en-GB":"Time for a Deal","zh-CN":"\u4ea4\u6613\u65f6\u95f4","zh-TW":"\u4ea4\u6613\u6642\u9593"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":false,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"654c70eab7233cbabceea00090519c14","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:29+00:00","updatedAt":"2018-06-07T16:47:29+00:00"},"lines":25,"hasJackpot":true},
            {"id":"beb8f670-a1dd-11e7-be5d-3fa2a5e1bcaa","name":{"en-GB":"Dragonz","zh-CN":"\u5e78\u8fd0\u9f99\u5b9d\u8d1d","zh-TW":"\u5e78\u904b\u9f8d\u5bf6\u8c9d"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"MG","name":{"en-GB":"MicroGaming","zh-CN":"MG","zh-TW":"MG"}},"product":"SLOTS","image":"f4d9f280cdfdae632311c3a7111252c5","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-08-28T12:58:41+00:00","updatedAt":"2018-05-18T17:13:08+00:00"},"lines":0,"hasJackpot":false},
            {"id":"c22d2b00-a1de-11e7-95fc-c1f8f6e04e62","name":{"en-GB":"Fire Joker","zh-CN":"\u55b7\u706b\u5c0f\u4e11"},"demo":{"flash":true,"html5":true},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":false,"iosApp":true},"brand":{"code":"PNG","name":{"en-GB":"Playn'Go","zh-CN":"PNG","zh-TW":"PNG"}},"product":"SLOTS","image":"a3005fd7b4f2ed90cd87a547af49c910","imageServer":2,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-08-28T13:00:46+00:00","updatedAt":"2018-05-17T19:45:18+00:00"},"lines":0,"hasJackpot":false},
            {"id":"4f12f6b0-b7f7-11e7-bb9a-af0c83166d08","name":{"en-GB":"White King","zh-CN":"\u767d\u72ee\u738b","zh-TW":"\u6000\u7279\u738b"},"demo":{"flash":true,"html5":false},"worksOn":{"pcBrowser":true,"mobileBrowser":true,"androidApp":true,"windowsDownload":true,"iosApp":true},"brand":{"code":"PT","name":{"en-GB":"Playtech","zh-CN":"PT","zh-TW":"PT"}},"product":"SLOTS","image":"a73ab05a9c6a2e2654e7446e9b009cf4","imageServer":4,"isNew":false,"isComingSoon":false,"isRecommend":false,"categories":[{"id":"a733fb40-5924-11e8-9593-4b0aac25e75f","name":{"zh-CN":"\u4f7f\u5f92\u987d\u4e3b","zh-TW":"\u4f7f\u5f92\u9811\u4e3b","en-GB":"Apostle"},"timestamps":{"createdAt":"2018-05-16T16:17:39+00:00","updatedAt":"2018-05-16T16:17:39+00:00"}}],"timestamps":{"createdAt":"2017-10-23T13:37:26+00:00","updatedAt":"2018-06-08T17:47:53+00:00"},"lines":40,"hasJackpot":false},
        ].map(l => this.gameReducer(l))
    }
}

module.exports = GameAPI;