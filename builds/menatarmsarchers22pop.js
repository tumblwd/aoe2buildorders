createBuild({
    name: 'M@A Archers',
    steps: [
        {
            resource: 'food',
            amount: 6
        },{
            resource: 'wood',
            amount: 4
        },{
            resource: 'food',
            amount: 9
        },{
            resource: 'wood',
            amount: 1
        },{
            build: [
                { building: 'barracks' },
                { unit: 'militia', amount: 3}
            ]
        },{
            resource: 'gold',
            amount: 2
        },{
            age: 'feudal'
        },{
            balance: [
                { res: 'food', amount: 11 },
                { res: 'wood', amount: 9 },
                { res: 'gold', amount: 2 },
            ]
        },{
            research: [
                'units/manatarms', 'techs/doublebitaxe', 'techs/horsecollar'
            ]
        },{
            build: [
                { building: 'archeryrange' },
                { unit: 'archer' }
            ]
        },{
            resource: 'wood',
            amount: 2
        },{
            resource: 'gold',
            amount: 8
        }
    ]
});