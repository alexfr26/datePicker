const getDate = (date) => ({
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
});

const padStartZero = (n) => (`${n}`.length === 1 ? `0${n}` : n);

const createLabel = (timeStamp) => {
    const { date: dd, month: mm, year: yy } = getDate(new Date(timeStamp));
    return `${padStartZero(dd)}-${padStartZero(mm + 1)}-${yy}`;
};

export { getDate, createLabel };
