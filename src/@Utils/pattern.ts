/**
 * A collection of regular expressions used to validate user input.
 * @type {object}
 */
export const pattern = {
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    mobile: /^([+]\d{2})?[6-9]\d{9}$/,
    aadhaar: /^\d{4}\d{4}\d{4}$/g,
    panNo: /[A-Z]{5}\d{4}[A-Z]/,
    gstNo: /^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/,
    //nameInitial: /(\p{L})\p{L}+/,
    otp: /^(\d{6})$/,
    pincode: /^[1-9]\d{5}$/,
    bank_account: /^\d{9,18}$/,
    ifsc: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
    positiveInteger: /^\d*$/,
    positiveFloat: /^(\d*(\.\d{0,2})?)$/,
    positiveIntegerWithFloat: /^([0-9]+|[0-9]+\.5)$/,
    noSpace: /^[^\s]/,
    onlySpace: /\S/,
    name: /^[a-zA-Z\s]+$/,
    rupees: /^\d*(?:\.\d*)?$/,
    map: /^https:\/\/maps\.app\.goo\.gl\/[a-zA-Z0-9]+$/,
    removeSpecialChars: /^[A-Za-z0-9 ]+$/,
    allowOnlyNumbers: /^(\s*|\d+)$/,
    containsAlphaNumericOrEmptyStr: /^[a-zA-Z0-9]*$/,
    amountWithTwoDecimals: /^\d*(\.?\d{1,2})$/,
    days: /^(?!0)\d{1,3}$/,
    website:
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?\w+=\w+(&\w+=\w+)*)?$/gm,
    yearToYearValidation: /^\d{2}-\d{2}$/, // ex 24-25
  } as const;
  
  /**
   * Checks if the password is valid.
   * @param {string} value - the password to check
   * @returns {string} the error message if the password is invalid, otherwise null
   */
  export const checkSignInPasswordPattern = (value: string) => {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
      return 'Enter a valid password.';
    }
    return true;
  };
  
  /**
   * Checks if the password is valid.
   * @param {string} value - the password to check
   * @returns {string} the error message if the password is invalid, otherwise null
   */
  export const checkPasswordPattern = (value: string) => {
    const isWhitespace = /^(?=.*\s)/;
    if (isWhitespace.test(value)) {
      return 'Password must not contain whitespace.';
    }
  
    /**
     * Checks if the password contains at least one uppercase character.
     * @param {string} value - the password to check
     * @returns {string} - the error message if the password does not contain at least one uppercase character.
     */
    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one uppercase character.';
    }
  
    /**
     * Checks if the password contains at least one lowercase character.
     * @param {string} value - the password to check
     * @returns {string} - the error message if the password does not contain at least one lowercase character.
     */
    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one lowercase character.';
    }
  
    /**
     * Checks if the password contains at least one digit.
     * @param {string} value - the password to check
     * @returns {string} - the error message if the password does not contain at least one digit.
     */
    const isContainsNumber = /^(?=.*\d)/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one digit.';
    }
  
    /**
     * Checks if the password contains at least one special symbol.
     * @param {string} value - the password to check
     * @returns {string} - the error message if the password does not contain at least one special symbol
     */
    const isContainsSymbol = /[!@#$%^&*()_+{}[\]:;"'<>,.?\\/~`|-₹]/;
    if (!isContainsSymbol.test(value)) {
      return 'Password must contain at least one special symbol.';
    }
  
    return true;
  };
  