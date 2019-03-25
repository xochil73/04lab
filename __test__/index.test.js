const writeToBuffer = require('../index.js');

const testString = 'Xochil';
describe('converts a string to a buffer and writes a file'), () => {
    it('returns a buffer', done => {
        expect(writeToBuffer(testString).toEqual(testString, ));
    })
};