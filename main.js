function createMultiplyTable(start, end) {
    if (checkStartNumberIsLessThanOrEqualsEndNumber(start, end)) {
        table = ''
        for (index = start; index <= end; index++) {
            oneLine = generateOneLine(start, index)
            table += oneLine + '\n'
        }
        return table
    } else {
        return 'null'
    }
}

function generateOneLine(start, end) {
    oneLine = ''
    for (j = start; j <= end; j++){
        oneExpression = generateOneExpression(j, end)
        oneLine += oneExpression + ' '
    }
    return oneLine
}

function generateOneExpression(start, end) {
    return start + '*' + end + '=' + start * end
}

function checkStartNumberIsLessThanOrEqualsEndNumber(start, end) {
    return start <= end
}

module.exports = createMultiplyTable;