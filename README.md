# phone-number-utility

Utility for inspecting and formatting phone numbers.

## API

    var PhoneNumberUtility = require('phone-number-utility')('au');

### .getType(number)

Get the type of phone number e.g. Mobile or Unknown... More to come.

### .isMobile(number)

Get whether the type of phone number is Mobile.

### .format(number)

Format the phone number according to *the* norm e.g. 0499 999 999 or 02 9999 9999.