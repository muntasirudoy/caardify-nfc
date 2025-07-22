export function formatDate(
  dateString: string,
  options?: { showTime?: boolean; showDate?: boolean },
): string {
  const date = new Date(dateString);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const monthsOfYear = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strHours = String(hours).padStart(2, '0');

  const showTime = options?.showTime ?? true;
  const showDate = options?.showDate ?? true;

  let datePart = '';
  if (showDate) {
    datePart = `${dayOfWeek}, ${day} ${month}, ${year}`;
  }

  let timePart = '';
  if (showTime) {
    timePart = `${strHours}:${minutes}:${seconds} ${ampm}`;
  }

  if (showDate && showTime) {
    return `${datePart} ${timePart}`;
  } else if (showDate) {
    return datePart;
  } else if (showTime) {
    return timePart;
  } else {
    return '';
  }
}
