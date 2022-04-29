const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let domainsCuted = domains.map(element => element.split('.').reverse());
  domainsCuted.forEach(elem => {
    for (let i = 1; i < elem.length + 1; i++) {
        let tempMass =[];
        tempMass = elem.slice(0, i);
        console.log(tempMass);
        let keyRes = '.' + tempMass.join('.');
        if (Object.keys(res).includes(keyRes)) {
          res[keyRes] = res[keyRes] + 1;
        } else res[keyRes] = 1;
    }
  })
  return res;
}


module.exports = {
  getDNSStats
};
