//@ts-check
/**
 * Returns the Days, Hours, Minutes, Seconds between two given {Date} objects.
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string[]}
 *
 */
export const getTimeBetweenDates = (startDate: Date, endDate: Date) => {
  let days = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
  let hours = (days % Math.floor(days !== 0 ? 1 : days)) * 24;
  let minutes = (hours % Math.floor(hours !== 0 ? 1 : hours)) * 60;
  let seconds = (minutes % Math.floor(minutes !== 0 ? 1 : minutes)) * 60;

  return [
    Math.floor(days).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    }),
    Math.floor(hours).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    }),
    Math.floor(minutes).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    }),
    Math.floor(seconds).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    }),
  ];
};
