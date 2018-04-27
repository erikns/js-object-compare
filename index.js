const hash = require('object-hash')
const diff = require('variable-diff')

const elementHash = (v) => {
    return hash([v])
}

module.exports = (expected, value, args) => {
    let result
    if (expected instanceof Array && value instanceof Array) {
        const expectedHashes = expected.map(elementHash).sort()
        const valueHashes = value.map(elementHash).sort()
        result = hash(expectedHashes) === hash(valueHashes)
    } else {
        result = hash(expected) === hash(value)
    }
    if (args && args.diff) {
        if (!result) return diff(expected, value).text
        else return ''
    }
    return result
}

