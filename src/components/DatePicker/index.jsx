import PropTypes from 'prop-types';
import { useState, useEffect, useReducer } from 'react';

// Lib && Reducer
import { generateCal, getDate, createLabel } from '../../lib';
import datePickerReducer from '../../lib/reducer';

// Components
import { Calendar } from '../Calendar';
import { Header } from '../Header';
import NavBlock from '../NavBlock';

// Style
import StyledDatePicker from './style';

const DatePicker = ({ type = 'single', ...props }) => {
    const [currDate, setCurrDate] = useState(getDate(new Date()));
    const [currCal, setCurrCal] = useState(generateCal(currDate.year, currDate.month));
    const [pickedDates, dispatch] = useReducer(datePickerReducer, []);

    useEffect(() => {
        setCurrCal(generateCal(currDate.year, currDate.month));
    }, [currDate]);

    const handlerFormChange = (e) => {
        setCurrDate((currDate) => ({ ...currDate, [e.target.name]: +e.target.value }));
    };

    const handleMonthChange = (type) => {
        const { month: mm, year: yy } = currDate;
        const { month, year } = getDate(new Date(yy, mm + Number(`${type}1`)));
        setCurrDate({ year, month });
    };

    const handleDatePicked = (timeStamp) => {
        const { month, year } = getDate(new Date(timeStamp));
        if (year !== currDate.year || month !== currDate.month) setCurrDate({ year, month });

        const dateLabel = createLabel(timeStamp);
        dispatch({ type: type, payload: { timeStamp, dateLabel } });
    };

    const handleDeletePickedDate = (dateArrIdx) => {
        dispatch({ type: 'deleteDate', payload: dateArrIdx });
    };

    return (
        <StyledDatePicker {...props}>
            <Header
                pickedDates={pickedDates}
                datePickerType={type}
                handleDeletePickedDate={handleDeletePickedDate}
            />

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

DatePicker.propTypes = {
    type: PropTypes.oneOf(['single', 'range', 'multiRange']).isRequired,
};

export { DatePicker };
