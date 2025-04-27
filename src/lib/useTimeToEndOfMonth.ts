// @ts-check
import { useState, useEffect } from "react";
import { getTimeBetweenDates } from './getTimeBetweenDates';

/**
 * A template for useState JSDocs
 * @template T
 * @typedef {[T, import('react').Dispatch<import('react').SetStateAction<T>>]} useState
 */

/**
 * This hook runs once when the page loads and creates an interval which will run once 
 * every <delay>ms and return the time remaining till the end of the month, 
 * represented as an Array [Days, Hours, Mins, Secs].
 * @param {number} delay
 * @returns {Array<string>} 
 * */
export const useTimeToEndOfMonth = (delay) => {

    /**
     * Manages the state for the end date of the countdown
     * @type {useState<Date>}
     */
    const [endDate, setEndDate] = useState(new Date());

    /**
     * Manages the state for the amount of time until the end of the month in 
     * Days, Hours, Minutes, Seconds
     * @type {useState<Array<string>>}
     */
    const [timeToEndOfMonth, setTimeToEndOfMonth] = useState(['0', '0', '0', '0']);
    
    /**
     * Create an async function that runs once every <delay>ms and updates the
     * time to end of month.
     */
    setInterval(() => {
        setTimeToEndOfMonth(getTimeBetweenDates(new Date(), endDate))
    }, delay)
    
    /**
     * Runs once on page load.
     * Sets the endDate variable to the last day of the current month
     */
    useEffect(() => {          
        let d = new Date();
        d.setMonth(d.getMonth() + 1, 0);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        setEndDate(d);
    }, [])
    
    return timeToEndOfMonth
}