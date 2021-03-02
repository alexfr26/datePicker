import { useState, useEffect, useReducer } from 'react';

// Lib && Reducer
import { generateCalendar, getDate, createLabel } from '../../lib';
import { datePickerReducer } from '../../lib/reducer';

// Components
import { Calendar } from '../Calendar';
import { Form } from '../Form';
import { FlexWrapper } from '../FlexWrapper';
import { Header } from '../Header';

// Style
import { StyledDatePicker } from './style';
import { Button } from '../Button';

export const DatePicker = ({ type = 'single', ...props }) => {
    const [currCal, setCurrCal] = useState([]);
    const [pickedDates, dispatch] = useReducer(datePickerReducer, []);
    const [currDate, setCurrDate] = useState({ year: null, month: null });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const { month, year } = getDate(new Date());
        setCurrDate({ year, month });
        setCurrCal(generateCalendar(year, month));
        setLoading(false);
    }, []);

    useEffect(() => {
        setCurrCal(generateCalendar(currDate.year, currDate.month));
    }, [currDate]);

    const handlerFormChanges = (e) => {
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

    if (loading) return <h1>Loading!</h1>;

    return (
        <StyledDatePicker {...props}>
            <Header pickedDates={pickedDates} datePickerType={type} />

            <FlexWrapper justify="space-evenly" margin="10px 0 5px 0">
                <Button
                    hoverShadow="2px 2px 2px black"
                    onClick={() => handleMonthChange('-')}
                >
                    🢀
                </Button>

                <Form onFormChanged={handlerFormChanges} values={currDate} />

                <Button
                    hoverShadow="-2px 2px 2px black"
                    onClick={() => handleMonthChange('+')}
                >
                    🢂
                </Button>
            </FlexWrapper>

            <Calendar
                dates={currCal}
                datePickerType={type}
                onDatePicked={handleDatePicked}
                pickedDates={pickedDates}
            />
        </StyledDatePicker>
    );
};
