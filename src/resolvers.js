module.exports = {
    Query: {
        recommendGames: async (_, {type}, {dataSources}) => dataSources.gameAPI.getRecommendGames(type),

        homeRecommends: async (_, __, {dataSources}) => {
            const [SlotsRecommend, LIVERecommend] = await Promise.all([
                dataSources.gameAPI.getRecommendGames('SLOTS'),
                dataSources.gameAPI.getRecommendGames('LIVE'),
            ])
            return [
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
                            data: LIVERecommend,
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
                            data: SlotsRecommend,
                        },
                        {
                            name: JSON.stringify({
                                'zh-CN': 'MG', 
                                'zh-TW': 'MG',
                                'en-GB': 'MG'
                            }),
                            code: 'MG',
                            data: LIVERecommend,
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
                            data: SlotsRecommend,
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
                            data: LIVERecommend,
                        },
                    ]
                },
            ]
        }
    },
  }