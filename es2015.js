//Dynamic object properties

let keys = ['name','age','degree']

let obj  = keys.reduce((acc,curretValue) => {
    return {
        ...acc,
        [curretValue]:'ishrat'
    }
},{})
// const testObj = {
// 	[keys[0]]: 'ishrat',
//     [keys[1]]: '25',
//     [keys[2]]: 'BE in CS',
// };
console.log('testObj', obj);
