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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (/[A-Z]/.test(char)) {
        const encryptedChar = String.fromCharCode(
          (char.charCodeAt(0) + key.charCodeAt(keyIndex % key.length) - 2 * 'A'.charCodeAt(0)) % 26 + 'A'.charCodeAt(0)
        );
        result += encryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      if (/[A-Z]/.test(char)) {
        const decryptedChar = String.fromCharCode(
          (char.charCodeAt(0) - key.charCodeAt(keyIndex % key.length) + 26) % 26 + 'A'.charCodeAt(0)
        );
        result += decryptedChar;
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
