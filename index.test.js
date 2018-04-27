const compare = require('./index')

describe('library', () => {
    describe('values', () => {
        test('equal values compare equal', () => {
            const result = compare('valueA', 'valueA')
            expect(result).toBe(true)
        })

        test('unequal values compare unequal', () => {
            const result = compare('valueA', 'valueB')
            expect(result).toBe(false)
        })
    })

    describe('objects', () => {
        test('equal objects compare equal', () => {
            const result = compare({a: 'a', b: 'b'}, {a: 'a', b: 'b'})
            expect(result).toBe(true)
        })

        test('objects with same keys regardless of order are equal', () => {
            const result = compare({a: 'a', b: 'b'}, {b: 'b', a: 'a'})
            expect(result).toBe(true)
        })

        test('unequal objects compare unequal', () => {
            const result = compare({a: 'a', b: 'b'}, {a: 'b', b: 'a'})
            expect(result).toBe(false)
        })
    })

    describe('arrays', () => {
        test('equal arrays compare equal', () => {
            const result = compare(['a', 'b', 'f'], ['a', 'b', 'f'])
            expect(result).toBe(true)
        })

        test('unequal arrays compare unequal', () => {
            const result = compare(['a', 'b'], ['a', 'b', 'f'])
            expect(result).toBe(false)
        })

        test('arrays with same elements in different order compare equal', () => {
            const result = compare(['a', 'b', 'c'], ['c', 'b', 'a'])
            expect(result).toBe(true)
        })
    })

    describe('print diff', () => {
        test('prints diff when extra arg is given', () => {
            const result = compare({a: 'b', b: 'a'}, {b: 2}, {diff: true})
            expect(result.length).toBeGreaterThan(1)
        })
    })
})

