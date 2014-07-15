
/**
 * Creates a new instance of the phone number utility
 * @param   {string} locale The country code
 * @returns {PhoneNumberUtility}
 */
module.exports = function(locale) {
  switch(locale) {
    case 'au':
      return require('./lib/'+locale);
    default:
      throw new Error();
  }
};