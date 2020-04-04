const createMultiplyTable = require('../main');

it ('should create multiply table', () => {
    expect(createMultiplyTable(2, 4)).toBe("2*2=4 \n2*3=6 3*3=9 \n2*4=8 3*4=12 4*4=16 \n");
});
