const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        recommendGames(type: Type): [Game]!
        homeRecommends: Recommends!
    }
    type Recommends{
        games: [Recommend]!
        bottomLeft: Recommend!
        bottomRight: Recommend_2! 
    }
    type Recommend_2{
        title: String!,
        icon: String!,
        items: [BigSlotsCard]!
    }
    type BigSlotsCard{
        product: Game!,
        image_1: String!,
        image_2: String
    }
    type Recommend{
        title: String!
        icon: String!
        items: [RecommendItem]!
    }
    type RecommendItem{
        name: String
        code: Type
        data: [Game]
    }
    enum Type{
        DISCOVER
        HEART
        SLOTS
        LIVE
        PT
        MG
        AG
        PNG
        HABA
    }
    type Game{
        brand: Brand
        categories: [Categories]
        demo: Demo
        hasJackpot: Boolean
        id: String!
        image: String!
        imageServer: Int!
        isComingSoon: Boolean
        isNew: Boolean!
        isRecommend: Boolean!
        lines: Int
        name: String!
        product: String!
        timestamps: Timestamps
        worksOn: WorksOn
    }
    type Brand{
        code: String!
        name: String
    }
    type WorksOn{
        androidApp: Boolean!
        iosApp: Boolean!
        mobileBrowser: Boolean!
        pcBrowser: Boolean!
        windowsDownload: Boolean!
    }
    type Timestamps{
        createdAt: String
        updatedAt: String
    }
    type Name{
        enGB: String
        zhCN: String
        zhTW: String
    }
    type Categories{
        id: String!
        name: String!
    }
    type Demo{
        flash: Boolean!
        html5: Boolean!
    }
`

module.exports = typeDefs;