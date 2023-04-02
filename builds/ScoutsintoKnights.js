// build basic Hera scouts into knights.  3-5 scouts added.  Add a couple of TCs after knight production going
// no deer pushing assumed although does make it easier 
createBuild({
    name: 'Scouts into Knights (21 pop)',
    steps: [
        {
            resource: 'food',
            amount: 6
        },{
            resource: 'wood',
            amount: 3
        },{
            resource: 'food',
            amount: 8
        },{
            resource: 'wood',
            amount: 3
        },{
            age: 'feudal'
        },{
            balance: [
                { res: 'food', amount: 11 },
                { res: 'wood', amount: 9 },
                { res: 'gold', amount: 0 },
            ]
        },{
            build: [
                { building: 'barracks' },
                { building: 'stable' },
                { unit: 'scout', amount: '3-5' },
                { building: 'pallisadewall' },
            ]
        },{
            research: [
                { tech: 'doublebitaxe'},
                { tech: 'horsecollar' }
            ]
        },{
            resource: 'wood',
            amount: 1
        },{
            resource: 'food',
            amount: 7
        },{
            resource: 'gold',
            amount: 5
        },{
            build: [
                { building: 'blacksmith' },
                { building: 'stable' },
            ]
        },{
            research: [
                { tech: 'wheelbarrow'},
            ]
        },{
            age: 'castle'
        },{
            research: [
                { tech: 'bloodlines'},
                { tech: 'goldmining'},
            ]
        },{
            build: [
                { building: 'stable' },
                { unit: 'knight', amount: '♾️'}
            ]
        }
    ]
});
