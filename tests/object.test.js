const { basic } = require('../src/objects');

describe('test object validations', () => {
    let key = null;
    test('the name key should equal \`bob\`', () => {
        key = "bob";
        expect(basic.name).toEqual(key)
    });

    test('the age key should equal \`100\`', () => {
        key = 100;
        expect(basic.age).toEqual(key)
    });
    
});
