/**
 * getNasaApodUrl is a function used to get url from api nasa apod.
 * @example getNasaApodUrl('2022-09-15');
 *  // returns 'https://api.nasa.gov/planetary/apod?date=2022-09-15&api_key=????'
 * @param {string} date
 * @returns {string}  Returns an url
 */
export const getNasaApodUrl = (date: string): string => {
    return `${process.env.REACT_APP_API_URL}?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`;
};
