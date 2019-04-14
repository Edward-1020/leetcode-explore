export default (arr) => {
    if (arr.length < 2) {
        return 0;
    }
    arr.sort();
    let max = 0;
    for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
        tmp = arr[i + 1] - arr[i]
        if (tmp > max) {
            max = tmp
        }
    }
    return max
}