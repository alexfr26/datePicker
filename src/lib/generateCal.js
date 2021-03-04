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
        .map((value, idx) => ({ value: value + idx, type }));
};

const generateTimestamp = (yy, mm, { value, type }) => {
    const dateTypes = { prev: -1, curr: 0, next: 1 };
    return new Date(yy, mm + dateTypes[type], value).getTime();
};

export default (year, month) => {
    const currMonthDates = generateDates(year, month);
    const fitstMonthDay = getNumOfDay(year, month, 1);
    const lastMonthDay = getNumOfDay(year, month, currMonthDates.length);

    const otherDays = {
        prevMonth:
            fitstMonthDay > 1
                ? generateDates(year, month - 1, 'prev').slice(-(fitstMonthDay - 1))
                : [],
        nextMonth:
            lastMonthDay < 7
                ? generateDates(year, month + 1, 'next').slice(0, 7 - lastMonthDay)
                : [],
    };

    const dates = [...otherDays.prevMonth, ...currMonthDates, ...otherDays.nextMonth];

    return dates.reduce((weeks, nextDate, dateIdx) => {
        const weekIdx = Math.floor(dateIdx / 7);

        return [
            ...weeks.slice(0, weekIdx),
            [...weeks[weekIdx], { ...nextDate, key: generateTimestamp(year, month, nextDate) }],
            ...weeks.slice(weekIdx + 1),
        ];
    }, Array(dates.length / 7).fill([]));
};
