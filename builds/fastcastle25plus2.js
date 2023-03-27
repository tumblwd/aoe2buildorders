createBuild({
    name: 'Fast Castle (25+2 vil)',
    steps: [
        {
            resource: 'food',
            amount: 6
        },{
            resource: 'wood',
            amount: 3
        },{
            resource: 'food',
            amount: 9
        },{
            resource: 'wood',
            amount: 4
        },{
            resource: 'gold',
            amount: 3
        },{
            age: 'feudal'
        },{
            research: [
                { tech: 'doublebitaxe'}
            ]
        },{
            build: [
                { building: 'market' },
                { building: 'blacksmith' },
                { unit: 'villager', amount: 2 }
            ]
        },{
            age: 'castle'
        },{
            research: [
                { tech: 'horsecollar' }
            ]
        }
    ]
});