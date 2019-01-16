const DataSource8xx = require('./DataSource8xx');

class PromotionAPI extends DataSource8xx {
    promotionReducer(promotion){
        return {
            ...promotion,
            title: JSON.stringify(promotion.title),
            content: JSON.stringify(promotion.content),
            max: '10%',
        }
    }
    async getPromotions() {
        const res = [
            {
                banner: "8758eb24beb630e31581881b347fea7e",
                categories: ["LIVE", "SLOTS", "SPORTS"],
                currency: "CNY",
                id: "0983c890-f8cb-11e8-81e6-cde074a754d4",
                period: {from: "2018-12-26T00:00:00+00:00", to: "2019-01-18T23:59:59+00:00"},
                status: "publish",
                title: JSON.stringify({"zh-TW": "新人福利，註冊即送", "zh-CN": "新人福利，注册即送", "en-GB": "新人福利，注册即送"}),
                max: '￥58'
            },
            {
                banner: "a7551fa32ac618b59ecfeb98a49e9149",
                categories: ["DEPOSIT", "SLOTS"],
                currency: "CNY",
                id: "3457b880-cde9-11e8-bd33-afa08e04259b",
                period: {from: "2018-10-18T22:36:52+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "老虎机每日存送", "zh-TW": "老虎机每日存送", "zh-CN": "老虎机每日存送"}),
                max: 'upTo-￥98'
            },
            {
                banner: "829b669d51c7558bc750042f8cb4bc46",
                categories: ["DEPOSIT", "SLOTS"],
                currency: "CNY",
                id: "1c4e1cb0-cde9-11e8-90f7-a97874e443f4",
                period: {from: "2018-10-16T06:36:12+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "首存红利", "zh-TW": "首存紅利", "zh-CN": "首存红利"}),
                max: '100%'
            },
            {
                banner: "9ab9eef10d4253acc64d767626950066",
                categories: ["DEPOSIT", "SLOTS"],
                currency: "CNY",
                id: "e0fdb620-cdbd-11e8-ac72-9339fee009de",
                period: {from: "2018-10-18T17:26:44+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "笔笔存笔笔送", "zh-TW": "笔笔存笔笔送", "zh-CN": "笔笔存笔笔送"}),
                max: '无上限'
            },
            {
                banner: "d4de11700d84addcfe1266847162e6f8",
                categories: ["SLOTS"],
                currency: "CNY",
                id: "87fb5530-c48b-11e8-8288-dd6a03205110",
                period: {from: "2018-10-03T05:46:49+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "天天救援金", "zh-TW": "天天救援金", "zh-CN": "天天救援金"}),
                max: 'upTo-￥3888'
            },
            {
                banner: "6bdba021958dce49a142d1fbedf41d9a",
                categories: ["SLOTS"],
                currency: "CNY",
                id: "1d0fa730-c479-11e8-a66c-1bcf192baf5b",
                period: {from: "2018-10-03T14:21:49+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "千百倍额外奖励", "zh-TW": "千百倍额外奖励", "zh-CN": "千百倍额外奖励"}),
                max: 'upTo-￥1599'
            },
            {
                banner: "88abf86503443a2be0b1e179baa5abb1",
                categories: ["REBATE", "SLOTS"],
                currency: "CNY",
                id: "fb4ca650-c475-11e8-af5b-73a469f56686",
                period: {from: "2018-10-05T13:59:24+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "老虎机返水", "zh-TW": "老虎机返水", "zh-CN": "老虎机返水"}),
                max: 'upTo-￥58888'
            },
            {
                banner: "7f1b9dcc4ff558adc23e98346568e6ee",
                categories: ["LIVE", "REBATE"],
                currency: "CNY",
                id: "adbd60f0-c475-11e8-98dd-c9e9cb29a26e",
                period: {from: "2018-09-08T16:32:24+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "真人返水", "zh-TW": "真人返水", "zh-CN": "真人返水"}),
                max: 'upTo-￥58888'
            },
            {
                banner: "307896c2acadcd9ec464730cbfa5422b",
                categories: ["REBATE", "SPORTS"],
                currency: "CNY",
                id: "6487b4b0-c472-11e8-ac90-a7e7534fd881",
                period: {from: "2018-09-24T05:33:08+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "体育返水", "zh-TW": "体育返水", "zh-CN": "体育返水"}),
                max: 'upTo-￥58888'
            },
            {
                banner: "f41d50ec853717ccb5de3d275349d8ea",
                categories: ["DEPOSIT", "LIVE", "SPORTS"],
                currency: "CNY",
                id: "f54569f0-bc92-11e8-b95e-3591c2409f37",
                period: {from: "2018-09-16T13:04:33+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "真人体育首存优惠", "zh-TW": "真人体育首存优惠", "zh-CN": "真人体育首存优惠"}),
                max: 'upTo-￥1599'
            },
            {
                banner: "0ff7557c48dcadbea550103478f953ee",
                categories: ["DEPOSIT", "SLOTS"],
                currency: "CNY",
                id: "62f2afe0-a2b8-11e7-aa14-59c8dec0bcd3",
                period: {from: "2018-09-03T08:00:00+00:00", to: null},
                status: "publish",
                title: JSON.stringify({"en-GB": "老虎机每周存送", "zh-TW": "老虎机每周存送", "zh-CN": "老虎机每周存送"}),
                max: 'upTo-159%'
            },
        ]
        return res;
    }
}

module.exports = PromotionAPI;