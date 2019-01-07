module.exports = {
    Query: {
        recommendGames: async (_, {type}, {dataSources}) => dataSources.gameAPI.getRecommendGames(type),

        promotions: async (_, __, {dataSources}) => dataSources.promotionAPI.getPromotions(),

        upgrade: async(_, __, {dataSources}) => dataSources.vipAPI.upgradeProgress(),
        
        homeRecommends: async (_, __, {dataSources}) => {
            const [SlotsRecommend, PTRecommend, Newest, Best, Discover, Heart] = await Promise.all([
                dataSources.gameAPI.getRecommendGames('SLOTS'),
                dataSources.gameAPI.getRecommendGames('PT'),
                dataSources.gameAPI.getNewest(),
                dataSources.gameAPI.getBest(),
                dataSources.gameAPI.getDiscover(),
                dataSources.gameAPI.getHeart(),
            ])
            return {
                games: [
                    {
                        title: JSON.stringify({
                            'zh-CN': '为您推荐', 
                            'zh-TW': '為您推薦',
                            'en-GB': 'Recommend For You'
                        }),
                        icon: 'star-home',
                        items: [
                            {
                                name: JSON.stringify({
                                    'zh-CN': '老虎机', 
                                    'zh-TW': '老虎機',
                                    'en-GB': 'SLOTS'
                                }),
                                code: 'SLOTS',
                                data: SlotsRecommend,
                            },
                            {
                                name: JSON.stringify({
                                    'zh-CN': '真人', 
                                    'zh-TW': '真人',
                                    'en-GB': 'LIVE'
                                }),
                                code: 'LIVE',
                                data: null,
                            }
                        ]
                    },
                    {
                        title: JSON.stringify({
                            'zh-CN': '发行商重点推荐', 
                            'zh-TW': '發行商重點推薦',
                            'en-GB': 'Publishers Recommendations'
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
                    {
                        title: JSON.stringify({
                            'zh-CN': '年度最佳', 
                            'zh-TW': '年度最佳',
                            'en-GB': 'Best of the year'
                        }),
                        icon: 'star-home',
                        items: [
                            {
                                name: null,
                                code: null,
                                data: Best,
                            },
                        ]
                    },
                    {
                        title: JSON.stringify({
                            'zh-CN': '查看最新内容', 
                            'zh-TW': '查看最新內容',
                            'en-GB': 'Newest'
                        }),
                        icon: 'megaphone',
                        items: [
                            {
                                name: null,
                                code: null,
                                data: Newest,
                            },
                        ]
                    },
                ],
                bottomLeft: {
                    title: JSON.stringify({
                        'zh-CN': '发现游戏', 
                        'zh-TW': '發現遊戲',
                        'en-GB': 'Discover Games'
                    }),
                    icon: 'compass_discover',
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
        }
    },
  }

