import { useState, useEffect, useReducer } from 'react';

// Lib && Reducer
import { generateCalendar, getDate, createLabel } from '../../lib';
import { datePickerReducer } from '../../lib/reducer';

// Components
import { Calendar } from '../Calendar';
import { Header } from '../Header';
import { NavBlock } from '../NavBlock';

// Style
import { StyledDatePicker } from './style';

export const DatePicker = ({ type = 'single', ...props }) => {
    const [currCal, setCurrCal] = useState([]);
    const [pickedDates, dispatch] = useReducer(datePickerReducer, []);
    const [currDate, setCurrDate] = useState({ year: '', month: '' });

    useEffect(() => {
        const { month, year } = getDate(new Date());
        setCurrDate({ year, month });
        setCurrCal(generateCalendar(year, month));
    }, []);

    useEffect(() => {
        setCurrCal(generateCalendar(currDate.year, currDate.month));
    }, [currDate]);

    const handlerFormChange = (e) => {
        setCurrDate({ ...currDate, [e.target.name]: +e.target.value });
    };

    const handleMonthChange = (type) => {
        const { month: mm, year: yy } = currDate;
        const { month, year } = getDate(new Date(yy, mm + Number(`${type}1`)));
        setCurrDate({ year, month });
    };

    const handleDatePicked = (timeStamp) => {
        const { month, year } = getDate(new Date(timeStamp));
        if (year !== currDate.year || month !== currDate.month)
            setCurrDate({ year, month });

        const dateLabel = createLabel(timeStamp);
        dispatch({ type: type, payload: { timeStamp, dateLabel } });
    };

    return (
        <StyledDatePicker {...props}>
            <Header pickedDates={pickedDates} datePickerType={type} />

            <NavBlock
                onBtnClick={handleMonthChange}
                onFormChange={handlerFormChange}
                currDate={currDate}
            />

            <Calendar
                dates={currCal}
                datePickerType={type}
                onDatePicked={handleDatePicked}
                pickedDates={pickedDates}
            />
        </StyledDatePicker>
    );
};
