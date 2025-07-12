import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Formats a date string to a readable format in the specified time zone.
 *
 * @param isoString - The ISO date string to format
 * @param format - Optional format string (default: "DD MMMM YYYY, hh:mm:ss A")
 * @param timeZone - Optional IANA time zone string (default: "Asia/Kolkata")
 * @returns Formatted date string
 */
export const formatDate = (
  isoString: string,
  format: string = "DD MMMM YYYY, hh:mm:ss A",
  timeZone: string = "Asia/Kolkata"
): string => {
  return dayjs(isoString).tz(timeZone).format(format);
};
