const inventory = require('./countries')

const findCountriesInSubregion = inventory.map(data => {
    return data.subregion
}).reduce((prev, curr) => {
    const currentCount = prev[curr] ?? 0
    return { ...prev, [curr]: currentCount + 1 }
}, {})
console.log(findCountriesInSubregion)