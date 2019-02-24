module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length == 0) {
            stack.push(str[i]);
            continue;
        }
        let findIndex = getIndex(bracketsConfig, str[i]);
        // console.log(findIndex);
        let q = findIndex[0];
        findIndex = bracketsConfig[q];
        // console.log(findIndex);

        if (
            findIndex[0] == findIndex[1] &&
            stack[stack.length - 1] != findIndex[0]
        ) {
            stack.push(str[i]);
            continue;
        } else if (
            findIndex[0] == findIndex[1] &&
            stack[stack.length - 1] == findIndex[0]
        ) {
            stack.pop();
            continue;
        }

        if (str[i] == findIndex[0]) {
            stack.push(str[i]);
        } else if (
            str[i] != findIndex[0] &&
            stack[stack.length - 1] == findIndex[0]
        ) {
            stack.pop();
        }
        // console.log("EACH ITERATION STACK: " + stack);
    }
    if (stack.length == 0) return true;
    return false;
};
function getIndex(inputArray, searchValue) {
    for (let i = 0; i < inputArray.length; i++) {
        let j = inputArray[i].indexOf(searchValue);

        if (j >= 0) {
            return [i, j];
        }
    }
    return null;
}
