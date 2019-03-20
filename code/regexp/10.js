export default (str, mode) => {
    let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
    let cur = 0
    let strLen = str.length
    for (let i = 0, len = modeArr.length, m = null; i < len; i++) {
        m = modeArr[i].split('')
        if (m[1] === '*') {
            if (m[0] === '.') {
                cur = strLen
                break
            } else {
                while (str[cur] === m[0]) {
                    cur++
                } 
            }
        } else {
            for (let j = 0, jl = m.length; j < jl; j++) {
                if (m[j] !== str[cur]) {
                    return false
                } else {
                    cur++
                }
            }
        }
    }
    return cur === strLen
}