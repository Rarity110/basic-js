const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam(members) {
  if (Array.isArray(members) === false) return false;    
  let name = '';
  let litters = [];
  members.forEach(element => {
    if (typeof element === "string" ) {
      litters.push(element.trim()[0].toUpperCase());
    }
  })
  litters.sort().forEach(element => {
  name += element;
  })
  // console.log(name);
  return name;
};
// createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise'])


module.exports = {
  createDreamTeam
};
