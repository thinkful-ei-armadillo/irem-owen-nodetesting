'use strict';

const expect=require('chai').expect;
const sort=require('../sort');

describe('sort function',() => {
  it('should sort ascending', () => {
    expect(sort([5, 3, 2, 6])).to.eql([2, 3, 5, 6]);
  });

  it('should return an array when given an array', () => {
    expect(sort([1, 2, 3])).to.be.an('array');
  });

  it('should return null response to an empty array', () => {
    expect(sort([])).to.be.empty;
  });

  it('should return the correct length of the array', () => {
    expect(sort([1,2,3])).to.have.lengthOf(3);
  });

  it('should reject non array objects', () => {
    expect(()=>sort(1)).to.throw('you need to provide an array');
  });

});