/**
 * Get file name from the url
 */
export const getFileNameFromS3URlWithExtension = (url: any) =>
    `${url?.split('/').pop()?.slice(0, 4)}.${url?.split('.').pop()}`;
  
  /**
   * Get file extension of an  uploaded file
   */
  export const getFileExtensionName = (url: string) => url.split('.').pop();
  
  /**
   * Remove undefined and empty entries from the form
   */
  export function removeEmptyValues(rawPayload: Record<string, any>) {
    return Object.fromEntries(
      Object.entries(rawPayload).filter(([, value]) => {
        if (value === undefined || value === null) return false;
        if (typeof value === 'string' && value.trim() === '') return false;
        if (Array.isArray(value) && value.length === 0) return false;
        return true;
      }),
    );
  }


  /**
 * Capitalize first letter
 */
export const capitalizedFirstLetter = (value: string) =>
    value.charAt(0).toUpperCase() + value.slice(1);


/**
 * Remove special chars and make first letter caps
 */
export const removeSpecialCharAndCapFirstLetter = (value: string) =>
    value.replace(/_/g, ' ').replace(/\b\w/g, (char: any) => char.toUpperCase());
  


export const convertDaysToShort = (selectedDate: string) => {
    switch (selectedDate) {
      case 'Monday':
        return 'M';
      case 'Tuesday':
        return 'T';
      case 'Wednesday':
        return 'W';
      case 'Thursday':
        return 'Th';
      case 'Friday':
        return 'F';
      case 'Saturday':
        return 'S';
      case 'Sunday':
        return 'Su';
      default:
        return '';
    }
  };


  /**
 * To find if the user is using Mozilla Firefox browser.
 */
export const isFirefox = typeof InstallTrigger !== 'undefined';

/**
 * To find if the user is using SAFARI browser
 */

export const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function (p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(!window.safari || (typeof safari !== 'undefined' && window.safari.pushNotification));


  /**
 * Current month and year for selected drop down
 */

export const currentMonthandYear = (shortForm = 0) => {
    let monthArray;
    if (shortForm) {
      monthArray = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
      ];
    } else {
      monthArray = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
    }
    const latestMonth = dayjs().month();
    const latestYear = dayjs().year();
    const monthAndYear = `${monthArray[latestMonth]} ${latestYear}`;
    return monthAndYear;
  };


  /**
 * Function to generate shorthand for previous years month and year as a dropdown
 */

export const ShortListMonthAndYear = (currentYear: number, previousYear: number) => {
    let yearData = new Array(0);
  
    while (currentYear !== previousYear) {
      const monthList = [
        `Jan ${currentYear}`,
        `Feb ${currentYear}`,
        `Mar ${currentYear}`,
        `Apr ${currentYear}`,
        `May ${currentYear}`,
        `Jun ${currentYear}`,
        `Jul ${currentYear}`,
        `Aug ${currentYear}`,
        `Sept ${currentYear}`,
        `Oct ${currentYear}`,
        `Nov ${currentYear}`,
        `Dec ${currentYear}`,
      ];
      yearData = yearData.concat(monthList);
      currentYear -= 1;
    }
    return yearData;
  };

  
  /**
 * Function to format header date in transaction
 */
export const handleDate = (date: any) => {
    const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const day = new Date(date).getDay();
    const parseDate = new Date(date).toDateString().slice(7, 10);
    const now = new Date().toDateString().slice(7, 10);
    let x = '';
    if (parseDate === '1' || parseDate === '21' || parseDate === '31') {
      x = 'st';
    } else if (parseDate === '2' || parseDate === '22') {
      x = 'nd';
    } else if (parseDate === '3' || parseDate === '23') {
      x = 'rd';
    } else {
      x = 'th';
    }
    return now === parseDate ? `Today, ${parseDate}${x}` : `${dayArray[day - 1]}, ${parseDate}${x}`;
  };
  

  /**
 * Function to genrete previous  years month and year for dropdown
 */
export const listMonthandYear = (currentYear: number, previousYear: number) => {
    let yearData = new Array(0);
    while (currentYear !== previousYear) {
      const dumm = [
        { id: `January ${currentYear}`, value: `January ${currentYear}` },
        { id: `February ${currentYear}`, value: `February ${currentYear}` },
        { id: `March ${currentYear}`, value: `March ${currentYear}` },
        { id: `April ${currentYear}`, value: `April ${currentYear}` },
        { id: `May ${currentYear}`, value: `May ${currentYear}` },
        { id: `June ${currentYear}`, value: `June ${currentYear}` },
        { id: `July ${currentYear}`, value: `July ${currentYear}` },
        { id: `August ${currentYear}`, value: `August ${currentYear}` },
        { id: `September ${currentYear}`, value: `September ${currentYear}` },
        { id: `October ${currentYear}`, value: `October ${currentYear}` },
        { id: `November ${currentYear}`, value: `November ${currentYear}` },
        { id: `December ${currentYear}`, value: `December ${currentYear}` },
      ];
      yearData = yearData.concat(dumm);
      currentYear -= 1;
    }
    return yearData;
  };

  
  /**
 * Function to get year as a drop down
 */

export const getYear = (currentYear: number, previousYear: number) => {
    let yearData = new Array(0);
  
    while (currentYear !== previousYear) {
      const yearList = [`${currentYear}`];
      yearData = yearData.concat(yearList);
      currentYear -= 1;
    }
    return yearData;
  };


  // to add image extention to formdata
export function removeExtension(filename: any) {
    return filename.substring(0, filename.lastIndexOf('.')) || filename;
  }
  
  // To download doc and view
  export const handleDownloadDoc = async (key: string) => {
    const response = await key /** getAccessForDocument(key); */ 
    const link = document.createElement('a');
    link.href = response.data.uploadUrl;
    link.target = '_blank';
    link.click();
  };
  


  
  /**
 * Determines whether to append 'Crores' based on the given index 'i', 'value', and 'nArray'.
 */
function shouldAppendCrores(i: number, value: number, nArray: number[]) {
    // eslint-disable-next-line eqeqeq
    return (i == 1 && value != 0) || (i == 0 && value != 0 && nArray[i + 1] == 0);
  }

  /**
 * Determines whether to append 'Lakhs' based on the given index 'i', 'value', and 'nArray'.
 */
function shouldAppendLakhs(i: number, value: number, nArray: number[]) {
    // eslint-disable-next-line eqeqeq
    return (i == 3 && value != 0) || (i == 2 && value != 0 && nArray[i + 1] == 0);
  }
  
  /**
   * Determines whether to append 'Thousand' based on the given index 'i', 'value', and 'nArray'.
   */
  function shouldAppendThousand(i: number, value: number, nArray: number[]) {
    // eslint-disable-next-line eqeqeq
    return (i == 5 && value != 0) || (i == 4 && value != 0 && nArray[i + 1] == 0);
  }
  
  /**
   * Determines whether to append 'Hundred' or 'Hundred and' based on the given index 'i', 'value', and 'nArray'.
   */
  function shouldAppendHundred(i: number, value: number, nArray: number[]) {
    // eslint-disable-next-line eqeqeq
    return i == 6 && value != 0 && nArray[i + 1] != 0 && nArray[i + 2] != 0;
  }

  /**
   * Define a function to append values to the wordsString based on certain conditions.
   */
  function appendToWordsString(i: number, value: number, nArray: number[], wordsString: string) {
    if (shouldAppendCrores(i, value, nArray)) {
      wordsString += 'Crores ';
    }
    if (shouldAppendLakhs(i, value, nArray)) {
      wordsString += 'Lakhs ';
    }
    if (shouldAppendThousand(i, value, nArray)) {
      wordsString += 'Thousand ';
    }
    if (shouldAppendHundred(i, value, nArray)) {
      wordsString += 'Hundred and ';
      // eslint-disable-next-line eqeqeq
    } else if (i == 6 && value != 0) {
      wordsString += 'Hundred ';
    }
    return wordsString;
  }
  
/**
 * Adjusts elements in the 'nArray' based on specific conditions.
 * It multiplies certain elements by 10 and handles the addition of words like 'Crores', 'Lakhs', etc.
 * @param {array} nArray - The input array of numeric values to adjust.
 */
function adjustNArrayElements(nArray: number[] | string[]) {
    for (let i = 0, j = 1; i < 9; i += 1, j += 1) {
      // eslint-disable-next-line eqeqeq
      if (i == 0 || i == 2 || i == 4 || i == 7) {
        // eslint-disable-next-line eqeqeq
        if (nArray[i] == 1) {
          nArray[j] = 10 + parseInt(nArray[j], 10);
          nArray[i] = 0;
        }
      }
    }
  }
  
  /**
   * Calculates the 'value' at the specified index 'i' in the 'nArray'.
   * If 'i' is in [0, 2, 4, 7], multiplies the element by 10; otherwise, takes it as is.
   * @param {number} i - The index at which to calculate the value.
   * @param {array} nArray - The input array containing numeric values.
   * @returns {number} The calculated value.
   */
  function calculateValueAtIndex(i: number, nArray: number[]) {
    if (i === 0 || i === 2 || i === 4 || i === 7) {
      return nArray[i] * 10;
    }
    return nArray[i];
  }


/**
 * Function used to copy from one array to another.
 */
function copyAndAdjustArrayElements(source, destination, startIndex, endIndex) {
    for (let i = startIndex, j = 0; i < endIndex; i += 1, j += 1) {
      destination[i] = source[j];
    }
  }

  /**
 * Appends words to the 'wordsString' based on the given 'value'.
 * If 'value' is not zero, it appends the corresponding words from the provided mapping.
 */
function appendWordsBasedOnValue(value: number, wordsString: string, words: string[]) {
    if (value !== 0) {
      wordsString += `${words[value]} `;
    }
    return wordsString;
  }

  
  /**
   * Function that converts numbers into words.
   */
  export function convertNumberToWords(amount: string | number) {
    const words = [];
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    amount = amount.toString();
    const atemp = amount.split('.');
    const number = atemp[0].split(',').join('');
    const nLength = number.length;
    let wordsString = '';
    if (nLength <= 9) {
      const nArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      const receivedNArray = [];
      copyAndAdjustArrayElements(number, receivedNArray, 0, nLength);
      copyAndAdjustArrayElements(receivedNArray, nArray, 9 - nLength, 9);
  
      adjustNArrayElements(nArray);
      for (let i = 0; i < 9; i += 1) {
        const value = calculateValueAtIndex(i, nArray);
        wordsString = appendWordsBasedOnValue(value, wordsString, words);
  
        wordsString = appendToWordsString(i, value, nArray, wordsString);
      }
      wordsString = wordsString.split('  ').join(' ');
    }
    return wordsString;
  }


  /**
 * Takes in a string of code and adds the correct amount of spaces to the beginning of each line.
 * @param {string} docName - the name of the document to format
 * @returns {string} the formatted document name
 */
export const getDocumentName = (docName?: string | File): string => {
    if (docName instanceof File) {
      const [name] = docName.name.split('.');
      return name;
    }
  
    if (!docName || typeof docName !== 'string') {
      return '';
    }
    const parts = docName.split('.');
    return parts.length > 1 ? parts.slice(0, -1).join('.') : docName;
  };


  /**
 * Takes in a string and returns the first and last letter of the string.
 * @param {string} name - the name to get the initials of.
 * @returns {string} - the initials of the name.
 */
export function stringAvatar(name = 'No Name Available') {
    if (!name) return 'NA';
    const names = name?.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
  
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }
  