export default (arr) => {
    arr = arr.filter(item => item > 0)
    if (arr.length) {
        arr.sort((a, b) => a - b)
        if (arr[0] !== 1) {
            return 1
        } else {
            for (let i = 0, len = arr.length - 1; i < len; i++) {
                if (arr[i + 1] - arr[i] > 1) {
                    return arr[i] + 1
                }
            }
            return arr.pop() + 1
        }
    } else {
        return 1
    }
}