
/**
 * Creates a new instance of the phone number utility
 * @param   {string} locale The country code
 * @returns {PhoneNumberUtility}
 */
module.exports = function(locale) {
  return require('./lib/'+locale);
};