module.exports = {
    Query: {
        recommendGames: async (_, {type}, {dataSources}) => dataSources.gameAPI.getRecommendGames(type),

        promotions: async (_, __, {dataSources}) => dataSources.promotionAPI.getPromotions(),

        upgrade: async(_, __, {dataSources}) => dataSources.vipAPI.upgradeProgress(),
        
        homeRecommends: async (_, __, {dataSources, authorization}) => {
            const [SlotsRecommend, PTRecommend, Discover, Heart] = await Promise.all([
                dataSources.gameAPI.getRecommendGames('SLOTS', authorization),
                dataSources.gameAPI.getRecommendGames('PT', authorization),
                // dataSources.gameAPI.getNewest(),
                // dataSources.gameAPI.getBest(),
                dataSources.gameAPI.getDiscover(),
                dataSources.gameAPI.getHeart(),
            ])
            return {
                games: [
                    // {
                    //     title: JSON.stringify({
                    //         'zh-CN': '为您推荐', 
                    //         'zh-TW': '為您推薦',
                    //         'en-GB': 'Recommend For You'
                    //     }),
                    //     icon: 'star-home',
                    //     items: [
                    //         {
                    //             name: JSON.stringify({
                    //                 'zh-CN': '老虎机', 
                    //                 'zh-TW': '老虎機',
                    //                 'en-GB': 'SLOTS'
                    //             }),
                    //             code: 'SLOTS',
                    //             data: SlotsRecommend,
                    //         },
                    //         {
                    //             name: JSON.stringify({
                    //                 'zh-CN': '真人', 
                    //                 'zh-TW': '真人',
                    //                 'en-GB': 'LIVE'
                    //             }),
                    //             code: 'LIVE',
                    //             data: null,
                    //         }
                    //     ]
                    // },
                    {
                        title: JSON.stringify({
                            'zh-CN': '品牌推荐', 
                            'zh-TW': '品牌推薦',
                            'en-GB': 'Brand Recommendations'
                        }),
                        icon: 'megaphone',
                        items: [
                            {
                                name: JSON.stringify({
                                    'zh-CN': 'PT', 
                                    'zh-TW': 'PT',
                                    'en-GB': 'PT'
                                }),
                                code: 'PT',
                                data: PTRecommend,
                            },
                            {
                                name: JSON.stringify({
                                    'zh-CN': 'MG', 
                                    'zh-TW': 'MG',
                                    'en-GB': 'MG'
                                }),
                                code: 'MG',
                                data: null,
                            },
                            {
                                name: JSON.stringify({
                                    'zh-CN': 'AG', 
                                    'zh-TW': 'AG',
                                    'en-GB': 'AG'
                                }),
                                code: 'AG',
                                data: null,
                            },
                            {
                                name: JSON.stringify({
                                    'zh-CN': 'PNG', 
                                    'zh-TW': 'PNG',
                                    'en-GB': 'PNG'
                                }),
                                code: 'PNG',
                                data: null,
                            },
                            {
                                name: JSON.stringify({
                                    'zh-CN': '哈巴', 
                                    'zh-TW': '哈巴',
                                    'en-GB': 'HABA'
                                }),
                                code: 'HABA',
                                data: null,
                            },
                        ]
                    },
                    // {
                    //     title: JSON.stringify({
                    //         'zh-CN': '年度最佳', 
                    //         'zh-TW': '年度最佳',
                    //         'en-GB': 'Best of the year'
                    //     }),
                    //     icon: 'star-home',
                    //     items: [
                    //         {
                    //             name: null,
                    //             code: null,
                    //             data: Best,
                    //         },
                    //     ]
                    // },
                    // {
                    //     title: JSON.stringify({
                    //         'zh-CN': '查看最新内容', 
                    //         'zh-TW': '查看最新內容',
                    //         'en-GB': 'Newest'
                    //     }),
                    //     icon: 'megaphone',
                    //     items: [
                    //         {
                    //             name: null,
                    //             code: null,
                    //             data: Newest,
                    //         },
                    //     ]
                    // },
                ],
                bottomLeft: {
                    title: JSON.stringify({
                        'zh-CN': '发现游戏', 
                        'zh-TW': '發現遊戲',
                        'en-GB': 'Discover Games'
                    }),
                    icon: 'compass',
                    items: [
                        {
                            name: null,
                            code: null,
                            data: Discover,
                        }
                    ]
                },
                bottomRight: {
                    title: JSON.stringify({
                        'zh-CN': '精心打造的心选推荐', 
                        'zh-TW': '精心打造的心選推薦',
                        'en-GB': 'Heart Recommends'
                    }),
                    icon: 'snapshots',
                    items: SlotsRecommend.slice(0, 7).map(item => ({
                        image_1: 'https://images-1.gog.com/5c705421e1f0b575d79560dcdf88abb1d37e2219f8f97e78e305fb3d62107fb8_curated_collection_vertical_tile.jpg',
                        image_2: 'https://images-2.gog.com/80f8b901eb7f0e8951059d6da9a2aa60b0d143b06a3b0d46d7f4a7b98519b36f.png',
                        product: item,   
                    })),
                    items: [
                        {
                            image_1: 'https://images-3.gog.com/a73e1509d4e311e0f8c21af33ec71cce28f6c0639168bf5d1d7c759c309d20cb_curated_collection_horizontal_tile.jpg',
                            image_2: 'https://images-2.gog.com/80f8b901eb7f0e8951059d6da9a2aa60b0d143b06a3b0d46d7f4a7b98519b36f.png',
                            product: Heart[0],   
                        },
                        {
                            image_1: 'https://images-1.gog.com/5c705421e1f0b575d79560dcdf88abb1d37e2219f8f97e78e305fb3d62107fb8_curated_collection_vertical_tile.jpg',
                            product: Heart[1],   
                        },
                        {
                            image_1: 'https://images-3.gog.com/17b02ac9f3bdfbd99e91fbbf37266a195ee6d764339150dbf1f64a057d13fb47_curated_collection_small_tile.jpg',
                            product: Heart[2],   
                        },
                        {
                            image_1: 'https://images-4.gog.com/066f510c06fdb7eb52308ec023191bac19ffa57ea9d2c7a31d101895ccfd95bb_curated_collection_small_tile.jpg',
                            product: Heart[3],   
                        },
                        {
                            image_1: 'https://images-2.gog.com/d868ed0c3f591d038c559f3b8e6a64f70b3c810aab12f430e0d1ca45c50bec52_curated_collection_small_tile.jpg',
                            product: Heart[4],   
                        },
                        {
                            image_1: 'https://images-1.gog.com/b6ee8122a80feaa4a1fd99c0d60e454f66a99c9b87409ff233998abf14f64800_curated_collection_small_tile.jpg',
                            product: Heart[5],   
                        },
                        {
                            image_1: 'https://images-3.gog.com/f37ab2e547342a1d641f60879c1ee0c703a8e4a9e736b7f94a665cd72cd7f305_curated_collection_vertical_tile.jpg',
                            product: Heart[6],   
                        },
                    ]
                },
            }
        },

        hotSlots: async(_, __, {dataSources}) => dataSources.gameAPI.getBest('SLOTS'),

        hotLives: async(_, __, {dataSources}) => dataSources.gameAPI.getBest('LIVE'),

        gameSearchHot: () => ['百家乐', '轮盘', '花花公子', '幸运', '宝藏'],

        playUrl: async(_, params, {dataSources, authorization}) => dataSources.gameAPI.getPlayUrl(params, authorization),
    
        gameUpdates: (_, {version}, {dataSources}) => dataSources.gameAPI.gameUpdates(version),

        appRecommendGames: async(_, __, {dataSources}) => dataSources.gameAPI.getAppRecommendGames(),

        carousels: (_, __, ___) => ([
            {
                title: '笔笔存，笔笔送',
                subtitle: '老虎机超高存送比例！拿到手软！',
                backgroundImage: 'carousel_2',
                page: "DiscountScreen",
                params: JSON.stringify({id: ["3457b880-cde9-11e8-bd33-afa08e04259b","1c4e1cb0-cde9-11e8-90f7-a97874e443f4","e0fdb620-cdbd-11e8-ac72-9339fee009de"]})
            },
            {
                title: '网红直播捕鱼游戏',
                subtitle: '机会难得！精彩不容错过',
                backgroundImage: 'carousel_3',
                link: "http://www.yy.com/86675040"
            },
            {
                title: '拥有业界独有的无限层级代理模式',
                subtitle: '无需申请！无需审核！',
                backgroundImage: 'carousel_4',
                page: "AffiliateScreen",
            },
        ])
    }
  }

