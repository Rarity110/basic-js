const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

// let date = new Date(2020, 02, 31)

function getSeason(date) {
  // console.log((new Date());
  // console.log(date);
    // if (!date) console.log('Unable to determine the time of year!');
    if (!date) return 'Unable to determine the time of year!';
    // if (typeof date !== )
    
    // console.log(typeof Date.parse(date));
    // if (Object.prototype.toString.call(date) !== '[object Date]') console.log('Invalid date!');
    if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');
    if (Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');
    let month = date.getMonth();
    let season = '';
    // console.log(month);
    if (1 < month &&  month < 5) {
      season = 'spring'
    } else if (4 < month &&  month < 8) {
      season = 'summer'
    } else if (7 < month &&  month < 11) {
      season = 'autumn'
    } else if (8 < month ||  month < 2) {
      season = 'winter'
    }
    // console.log(season);
    return season;
}

// getSeason(date);


module.exports = {
  getSeason
};
