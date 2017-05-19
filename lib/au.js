/**
 * Australian phone number utility
 * @see   A better library exists at https://code.google.com/p/libphonenumber/???
 * @name  PhoneNumberUtility
 */
module.exports = {

  TYPE_INVALID: 'Invalid',
  TYPE_MOBILE:  'Mobile',
  TYPE_UNKNOWN: 'Unknown',

  /**
   * Gets the type of phone number based on the area code
   * @param   {string} number
   * @return  {string}
   */
  getType: function(number) {
    if (number.replace(/\s/g, '').substr(0, 2) === '04') {
      return this.TYPE_MOBILE;
    } else {
      return this.TYPE_UNKNOWN;
    }
  },

  /**
   * Get whether the phone number is a mobile phone number
   * @param   {string} number
   * @returns {boolean}
   */
  isMobile: function (number) {
    return this.getType(number) === this.TYPE_MOBILE;
  },

  /**
   * Formats the phone number
   * @param   {string} number
   * @return  {string}
   */
  format: function(number) {
    if(!number) {
      return "";
    }
    
    number = number.replace(/\s/g, '');
    
    if (this.isMobile(number)) {

      if (number.length > 7) {
        number = number.substr(0, 4) + ' ' + number.substr(4, 3) + ' ' + number.substr(7, 3);
      } else if (number.length > 4) {
        number = number.substr(0, 4) + ' ' + number.substr(4, 3);
      } else {
        number = number;
      }

    } else {

      if (number.length > 6) {
        number = number.substr(0, 2) + ' ' + number.substr(2, 4) + ' ' + number.substr(6, 4);
      } else if (number.length > 2) {
        number = number.substr(0, 2) + ' ' + number.substr(2, 4);
      } else {
        number = number;
      }

    }
    return number.substr(0, 12);
  }

};