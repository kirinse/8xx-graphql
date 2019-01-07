const DataSource8xx = require('./DataSource8xx');

class VipAPI extends DataSource8xx {
    constructor() {
        super();
        this.baseURL = 'https://api.8xxbet.com/';
    }
    filterWelfare(value){ 
        return !['REBATE-SPORTS-RATE', 'REBATE-SLOTS-RATE', 'REBATE-LOTTERY-RATE', 'REBATE-LIVE-RATE'].includes(value.key)
    }
    async getRanks() {
        const res = await this.get('ranks');
        return res ? res.data : [];
    }
    async upgradeProgress(){
        return null
        const ranks = await this.getRanks()
        const nextRankData = ranks.find(item => item.code === '1X')

        if(!nextRankData){
            return null
        }

        const upgradeConditions = nextRankData.currencies.CNY.conditions.filter(i => i.key.split('-')[0] === "UPGRADE")
        return {
            nextRank: '1X',
            conditions: upgradeConditions.map(condition => {
                const gradingData = nextRankData.currencies.CNY.conditions.find(i => i.key === `GRADING-${condition.key.split('-')[1]}`)
                return {
                    name: JSON.stringify(condition.name),
                    nowValue: 20,
                    upgradeValue: parseInt(condition.value),
                    gradingValue: gradingData ? parseInt(gradingData.value) : null
                }
            }),
            award: nextRankData.currencies.CNY.treatments.filter(this.filterWelfare).map(welfare => ({
                name: JSON.stringify(welfare.name),
                value: welfare.value,
                value_type: welfare.value_type,
                image: "https://images-1.gog.com/ae0dd2346e947205e49491fa53915906789cd83a1e537eadd616677becfde044_stretch_goal_320.jpg"
            }))
        }
    }
}

module.exports = VipAPI;