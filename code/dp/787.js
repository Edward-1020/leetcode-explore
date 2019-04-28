export default (src, dst, k) => {
    //  对n个城市m个航班做飞行说明
    let fights = [
        [0, 1, 100],
        [1, 2, 100],
        [0, 2, 500]
    ]
    let cheap = (src, dst, k) => {
        let prev = fights.filter(item => item[1] === dst)
        let min = Math.min.apply(null, prev.map(item => {
            if (item[0] === src && k > -1) {
                return item[2]
            } else if (k === 0 && item[0] !== src) {
                return Number.Max_SAFE_INTEGER
            } else {
                return item[2] + cheap(src, item[0], k - 1)
            }
        }))
        return min
    }
    return cheap(src, dst, k) || -1;
}