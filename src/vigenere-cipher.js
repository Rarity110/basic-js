const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type) {
    if (type === false) {
      this.direction = false;
    } else {
      this.direction = true;
    }
  }


  encrypt(message, key) {
    if (!key || !message) {
      throw new Error('Incorrect arguments!');
    }
    let newKey = '';
    let numOfKey = Math.floor(message.length / key.length);
    for (let i = 0; i < numOfKey; i++) {
      newKey = newKey + key;
    }
    for (let j = 0; j < (message.length % key.length); j++) {
      newKey = newKey + key[j]
    }
    console.log(newKey);  
    let res = '';
    let alphabeth = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let rows = alphabeth.length;
    console.log((rows));
    let massMessage = message.toUpperCase().split('');
    let massRes = [];
    let count = 0;
    for (let x = 0; x < massMessage.length; x++) {
      if (alphabeth.includes(massMessage[x])) {
        let indA = alphabeth.indexOf(massMessage[x].toUpperCase());
        let indB = alphabeth.indexOf(newKey[count].toUpperCase());
        massRes.push(alphabeth[(indA + indB) % 26]);
        count ++;
      } else {
        massRes.push(massMessage[x]);
      }
    }
    // massRes.forEach(element => {
    //   res = res + element;
    // });
    if (this.direction) {
      massRes.forEach(element => {
        res = res + element;
      });
    } else {
      massRes.reverse().forEach(element => {
        res = res + element;
      });
    }
  return res; 
  }

  decrypt(encryptedMessage, key) {
    if (!key || !encryptedMessage) {
      throw new Error('Incorrect arguments!');
    }
    
    let newKey = '';
    let numOfKey = Math.floor(encryptedMessage.length / key.length);
    for (let i = 0; i < numOfKey; i++) {
      newKey = newKey + key;
    }
    for (let j = 0; j < (encryptedMessage.length % key.length); j++) {
      newKey = newKey + key[j]
    }
    console.log(newKey);  
    let res = '';
    let alphabeth = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let rows = alphabeth.length;
    let massMessage = encryptedMessage.toUpperCase().split('');
    let massRes = [];
    let count = 0;
    console.log(massMessage);
    for (let x = 0; x < massMessage.length; x++) {
      if (alphabeth.includes(massMessage[x])) {
        console.log(massMessage[x]);
        let indA = alphabeth.indexOf(massMessage[x].toUpperCase());
        console.log(indA);
        let indB = alphabeth.indexOf(newKey[count].toUpperCase());
        console.log(indB);
        massRes.push(alphabeth[(26 + indA - indB) % 26]);
        count ++;
      } else {
        massRes.push(massMessage[x]);
      }
    }
    // massRes.forEach(element => {
    //   res = res + element;
    // });
    if (this.direction) {
      massRes.forEach(element => {
        res = res + element;
      });
    } else {
      massRes.reverse().forEach(element => {
        res = res + element;
      });
    }
   return res; 
   }
}

module.exports = {
  VigenereCipheringMachine
};
