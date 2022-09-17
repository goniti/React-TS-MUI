import { format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

/**
 * formatDate is a function used to convert date
 * @example formatDate('Sun Sep 12 1999 23:15:46 GMT+0200 (Central European Summer Time)');
 *  // returns '1999-09-12'
 * @param {string} date
 * @returns {string}  Returns date with format yyyy-MM-dd
 */
const formatDate = (date: Date): string => {
    return format(date, DATE_FORMAT);
};

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

export { formatDate, yesterday };
