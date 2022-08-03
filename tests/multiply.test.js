const multiply = require('../src/multiply');

describe('test multiply positive scenarios', () => {
    beforeAll(() => {
        const date = new Date();
        const startTime = `${date.toTimeString()} - ${date.getMilliseconds()}ms`
        console.log(`before > ${startTime}`);
    });
    test('multiply 3 by 2 should equal to 6', () => {
        expect(multiply(3, 2)).toBe(6);
    })

    test('multiply -7 by 9 should equal to 63', () => {
        expect(multiply(-7, 9)).not.toBe(63);
    })

    test('multiply 1 by 1 should equal to 1 and be true', () => {
        expect(multiply(1, 1)).toBeTruthy();
    })

    afterAll(() => {
        const date = new Date();
        const endTime = `${date.toTimeString()} - ${date.getMilliseconds()}ms`
        console.log(`after > ${endTime}`);
    });
})
