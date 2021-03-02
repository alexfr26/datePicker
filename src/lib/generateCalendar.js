// GENERATE CALENDAR
const getNumOfDay = (year, month, day) => {
    const dayNum = new Date(year, month, day).getDay();
    return dayNum === 0 ? 7 : dayNum;
};

const getMonthNumOfDays = (year, month) => new Date(year, month + 1, 0).getDate();

const generateDates = (year, month, type = 'curr') => {
    const monthDays = getMonthNumOfDays(year, month);
    return Array(monthDays)
        .fill(1)
        .map((val, idx) => ({ value: val + idx, type }));
};

const generateTimeStamp = (yy, mm, { value, type }) => {
    const dateTypes = { prev: -1, curr: 0, next: 1 };
    return new Date(yy, mm + dateTypes[type], value).getTime();
};

const generateCalendar = (year, month) => {
    const currMonthDates = generateDates(year, month);
    const fitstMonthDay = getNumOfDay(year, month, 1);
    const lastMonthDay = getNumOfDay(year, month, currMonthDates.length);

    let prevMonthDates = [];
    if (fitstMonthDay > 1) {
        const sliceNum = fitstMonthDay - 1;
        prevMonthDates = generateDates(year, month - 1, 'prev').slice(-sliceNum);
    }

    let nextMonthDates = [];
    const sliceNum = 7 - lastMonthDay;
    if (lastMonthDay < 7) {
        nextMonthDates = generateDates(year, month + 1, 'next').slice(0, sliceNum);
    }

    const dates = [...prevMonthDates, ...currMonthDates, ...nextMonthDates];
    const numOfWeeks = dates.length / 7;

    return dates.reduce((weeks, nextDate, dateIdx) => {
        const weekIdx = Math.floor(dateIdx / 7);
        const key = generateTimeStamp(year, month, nextDate);

        return [
            ...weeks.slice(0, weekIdx),
            [...weeks[weekIdx], { ...nextDate, key }],
            ...weeks.slice(weekIdx + 1),
        ];
    }, Array(numOfWeeks).fill([]));
};

export { generateCalendar };
