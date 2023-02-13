const inventory=require("./countries")

const findCountries = inventory.map(data => {
    return data.region
}).reduce((prev, curr) => {
    const currentValue = prev[curr] ?? 0
    // console.log(currentValue)
    return { ...prev, [curr]: currentValue + 1 }
}, {})
console.log(findCountries)













// const findPopulation = inventory.reduce((perv,curr)=>{
// // console.log( curr["subregion"])
// console.log(curr.subregion)
// if(curr["subregion"]===perv["subregion"]){
   
//     console.log(curr.population)
// }

// //  if (perv.==cur){

// //  }

    
// },0)
// console.log(findPopulation)




// const a = inventory.filter((data) => {
//     if (data.region === "Africa" || data.region === "Europe" || data.region === "Europe") {
//         return true
//     }
// }).map(value => {
//     // console.log(value)
// }).reduce((prev, curr) => {
//     // console.log(prev)
//     const currentCount = prev[curr] ?? 0
//     return { ...prev,[curr]: currentCount + 1 }
// })
// console.log(a)
// const d = b.map((data)=>{
//     console.log(data)
// })
// // 

// const c =inventory.filter(data=>{
//     // console.log(data)
//     return data.subregion === "Central Asia"
// })
//

// const d = inventory.reduce((prev, curr) => {
//     let count=0
//     // console.log(prev === curr.subregion)
//     // let currentValue=prev[curr] 
//     if(prev===curr["subregion"]){
 
//     }
//     else{
//         prev=curr
//     //    return prev.population
//         // return curr
//     }
   
//  return prev
// },0)
// // console.log(d)