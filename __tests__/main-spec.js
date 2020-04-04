const createMultiplyTable = require('../main');

it ('should create multiply table', () => {
    expect(createMultiplyTable(2, 4)).toBe("123");
});
