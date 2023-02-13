const inventory = require('./countries')

function FindAveragePopulation() {
    let subregionValue = '';
    let max = 0
    let count = 0
    for (index = 0; index < inventory.length; index++) {
        if (subregionValue == inventory[index]['subregion']) {
            count++
            // console.log(inventory[0]["subregion"])
            max = +(max + inventory[index]['population'])
            console.log({ ...inventory['subregion'], ['Average of country']: parseInt(max / count) })
        }
        else {
            subregionValue = inventory[index]['subregion']
            // console.log(count)

        }

    }
    return max
}

console.log(FindAveragePopulation())

// const FindAveragePopulation=inventory.reduce((prev,curr)=>{
//     let subregion=' ';
//     if(prev==curr[0]['subregion']){
//         console.log(...curr[0]['subregion'],[0]:count)
//     }



// })

