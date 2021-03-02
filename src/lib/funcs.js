const getDate = (data) => {
    const year = data.getFullYear();
    const month = data.getMonth();
    const date = data.getDate();
    return { date, month, year };
};

const padStartZero = (n) => {
    return `${n}`.length === 1 ? `0${n}` : n;
};

const createLabel = (timeStamp) => {
    const { date: dd, month: mm, year: yy } = getDate(new Date(timeStamp));
    return `${padStartZero(dd)}-${padStartZero(mm + 1)}-${yy}`;
};

export { getDate, createLabel };
