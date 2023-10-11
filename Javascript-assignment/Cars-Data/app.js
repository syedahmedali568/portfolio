var cars = {
    Honda: {
        civic: {
            reborn: {
                name: 'Honda Civic Reborn',
                year: '2023',
                price: '20000',
                colors: ['Red', 'White', 'Black']
            },
            accord: {
                name: 'Honda Accord LX',
                year: '2023',
                price: '25500',
                colors: ['Silver', 'Blue', 'Gray', 'White']
            },
            crv: {
                name: 'Honda CR-V EX',
                year: '2023',
                price: '29800',
                colors: ['Red', 'Green', 'Black', 'Silver']
            },
            pilot: {
                name: 'Honda Pilot Touring',
                year: '2023',
                price: '42500',
                colors: ['White', 'Black', 'Blue', 'Gray']
            },
            fit: {
                name: 'Honda Fit Sport',
                year: '2023',
                price: '19200',
                colors: ['Orange', 'Blue', 'Gray', 'Silver']
            },
            odyssey: {
                name: 'Honda Odyssey EX-L',
                year: '2023',
                price: '38700',
                colors: ['Black', 'White', 'Red', 'Silver']
            }
        }
    }
    // Toyota: {
    //     camry: {
    //         name: 'Toyota Camry LE',
    //         year: '2023',
    //         price: '25000',
    //         colors: ['Silver', 'Blue', 'White', 'Black'],

    //     },
    //     rav4: {
    //         name: 'Toyota RAV4 XLE',
    //         year: '2023',
    //         price: '28000',
    //         colors: ['Red', 'Blue', 'Gray', 'Silver'],

    //     },
    //     highlander: {
    //         name: 'Toyota Highlander Limited',
    //         year: '2023',
    //         price: '42000',
    //         colors: ['White', 'Black', 'Blue', 'Gray'],

    //     },
    //     corolla: {
    //         name: 'Toyota Corolla SE',
    //         year: '2023',
    //         price: '21000',
    //         colors: ['Red', 'Blue', 'Gray', 'Silver'],

    //     },
    //     sienna: {
    //         name: 'Toyota Sienna XLE',
    //         year: '2023',
    //         price: '35000',
    //         colors: ['White', 'Silver', 'Red', 'Blue'],

    //     }
    // }
}
// var user = 'Honda'
// var model = 'civic'
// console.log(cars[user][model])


for (var company in cars) {
    for (var model in cars[company]) {
        for (var variant in cars[company][model])
            console.log(cars[company][model][variant])
    }
}