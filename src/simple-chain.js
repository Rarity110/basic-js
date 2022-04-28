const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  mass : [],
  getLength() {
   return this.mass.length;
  },
  addLink(value) {
   this.mass.push(value);
   return this;
  },
  removeLink(position) {
   if (Number.isInteger(position) === false || position <= 0 || position > this.mass.length) {
     this.mass.length = 0;
     throw new Error("You can't remove incorrect link!");  
   }
   this.mass.splice(position - 1, 1);
   return this;
  },

  reverseChain() {
   this.mass.reverse();
   return this;
  },

  finishChain() {
    let res = '';
    this.mass.forEach((element, index, array) => {
      res = res + '( ' + element + ' )';
      if (index < array.length - 1) {
        res = res + '~~';
      }
    });
    this.mass.length = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
