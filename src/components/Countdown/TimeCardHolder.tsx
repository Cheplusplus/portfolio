import timeCards from "../../assets/Group 3 Copy.svg";
import { useTimeToEndOfMonth } from "../../lib/useTimeToEndOfMonth";
import { motion } from "motion/react";

/**
 * This component returns the time card objects for displaying time till end
 * of the month.
 */
const TimeCardHolder = () => {
  /**
   * The update delay for the countdown timer
   * @type {number}
   */
  const delay = 1000;
  /**
   * The time remaining till the end of the month, represented as an Array
   * [Days, Hours, Mins, Secs]
   * @type {Array<number>}
   */
  const timeToEndOfMonth = useTimeToEndOfMonth(delay);
  /**
   * labels for the measures of time
   * @type {Array<string>}
   */
  const timeLabels = ["days", "hours", "minutes", "seconds"];

  return (
    <div className="time-card-holder">
      {timeToEndOfMonth.map((time, i) => (
        <div className="time-card-outer" key={i}>
          <div className="time-card">
            <img className="time-card-img" src={timeCards}></img>
            <motion.span initial={{ y: "-10vh" }} animate={{ y: "0" }} className="time">
              {time}
            </motion.span>
          </div>
          <p className="time-card-label">{timeLabels[i].toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default TimeCardHolder;
