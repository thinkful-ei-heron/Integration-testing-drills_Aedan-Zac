const { expect } = require('chai');
const {sort} = require('../drill-1');


describe('drill-1 test suite', () => {
    it('Returns an array', () => {
        let testArr = [0, 1, 3, 2];
        let returnedArr = sort(testArr);
        expect(returnedArr).to.be.an('Array');
    });
    it('Returns an array with same length given to it.', () => {
        let testArr = [0, 1, 3, 2];
        let returnedArr = sort(testArr);
        expect(returnedArr.length).to.equal(4);
    });
    it('Sorts an array of strings', () => {
        let testArr = ['fruit', 'apple', 'strawberry', 'banana', 'pizza'];
        let returnedArr = sort(testArr);
        expect(returnedArr).to.eql(['apple','banana','fruit','pizza','strawberry']);
    });
    it('Sorts an array of numbers', () => {
        let testArr = [90,1,-35,42,10923098,74,0,12];
        let returnedArr = sort(testArr);
        expect(returnedArr).to.eql([-35,0,1,12,42,74,90,10923098]);
    });
});