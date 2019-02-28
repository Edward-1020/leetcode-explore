// 较冗余写法
// export default (str) => {
//     let arr = str.split(' ');
//     let result = arr.map((item) => {
//         return item.split('').reverse().join('')
//     });
//     return result.join(' ');
// }

//  优化写法
// export default (str) => {
//     return str.split(' ').map((item) => {
//         return item.split('').reverse().join('')
//     }).join(' ');
// }

//  正则优化写法1
// export default (str) => {
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

//  正则优化写法2
export default (str) => {
    return str.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ')
}