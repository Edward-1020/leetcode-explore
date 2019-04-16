export default (arr) => {
    let result = []
    let pre1 = null
    let pre2 = null
    arr.forEach(item => {
        switch (item) {
            case 'C':
                if (result.length) {
                    result.pop()
                }
                break;
            case 'D':
                if (result.length) {
                    pre1 = result.pop();
                    result.push(pre1, pre1 * 2);
                }
                break;
            case '+':
                if (result.length) {
                    pre1 = result.pop()
                    pre2 = result.pop()
                    result.push(pre2, pre1, pre2 + pre1);
                }
                break;
        
            default:
                result.push(item * 1)
                break;
        }
    })
    
    return result.reduce((total, num) => total + num);
}