// build basic Hera scouts into Unique Unit.  3-5 scouts added.  Need wall with safe stone.
// Options after build are second castle or tech switch to support UU/counter opponent.
// no deer pushing assumed although does make it easier 
createBuild({
    name: 'Scouts into Unique Unit (21 pop)',
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
                { unit: 'scout', amount: 5 },
            ]
        },{
            research: [
                { tech: 'doublebitaxe'},
                { tech: 'horsecollar' }
            ]
        },{
            resource: 'food',
            amount: 10
        },{
            resource: 'stone',
            amount: 3
        },{
            resource: 'gold',
            amount: 4
        },{
            build: [
                { building: 'blacksmith' },
            ]
        },{
            research: [
                { tech: 'wheelbarrow'},
            ]
        },{
            balance: [
                { res: 'food', amount: 18 },
                { res: 'wood', amount: 9 },
                { res: 'gold', amount: 5 },
                { res: 'stone', amount: 5 },
            ]
        },{
            age: 'castle'
        },{
            research: [
                { tech: 'goldmining'},
            ]
        },{
            build: [
                { building: 'castle' },
            ]
        },{
            research: [
                { tech: 'bowsaw'},
            ]
        }
    ]
});
