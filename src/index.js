// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const newArr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) {
            matrix[i].sort().reverse();
        }
        for (let j = 0; j < matrix[i].length; j++) {
            newArr.push(matrix[i][j]);
        }
    }
    return newArr;
}
