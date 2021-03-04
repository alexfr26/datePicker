export default {
    _DAYS: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    _MONTHS: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],

    _YEARS: Array(100)
        .fill(1970)
        .map((year, yearIdx) => year + yearIdx),

    get DAYS() {
        return this._DAYS;
    },

    get MONTHS() {
        return this._MONTHS;
    },

    get YEARS() {
        return this._YEARS;
    },
};
