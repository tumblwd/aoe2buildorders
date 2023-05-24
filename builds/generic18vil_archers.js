// @bluemoon BO from Low ELO Legion discord channel
// ideally push or mill deer 
createBuild({
    name: 'Generic Archers (18 vil)',
    steps: [
        {
            resource: 'food',
            amount: 6
        },{
            resource: 'wood',
            amount: 3
        },{
            resource: 'food',
            amount: 2
        },{
            resource: 'wood',
            amount: 1
        },{
            resource: 'food',
            amount: 6
        },{
            age: 'feudal'
        },{
            balance: [
                { res: 'food', amount: 6 },
                { res: 'wood', amount: 9 },
                { res: 'gold', amount: 3 },
            ]
        },{
            build: [
                { building: 'barracks' },
            ]
        },{
            build: [
                { building: 'archeryrange', amount: 2 },
                { unit: 'archer', amount: 8}
            ]
        },{
            research: [
                { tech: 'fletching' }
            ]
        },{
            resource: 'gold',
            amount: 4
        },{
            build: [
                { building: 'archeryrange', amount: 2 },
                { unit: 'archer', amount: 8}
            ]
        },{
            research: [
                { tech: 'doublebitaxe' }
                { tech: 'goldmining' }
            ]
        },{
            resource: 'wood',
            amount: 2
        },{
            resource: 'food',
            amount: 2
        },{
            build: [
                { unit: 'archer', amount: '♾️'},
                { building: 'pallisadewall' },              
            ]
        },{
            age: 'castle'
        },{
            research: [
                { tech: 'crossbow'},
                { tech: 'horsecollar' }
            ]
        }
    ]
});
