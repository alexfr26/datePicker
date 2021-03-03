import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CONSTANTS } from '../../lib';
import { renderRows, simpleCellsRender } from './helper';

// Components
import { Row } from './Row';

const StyledCalendar = styled.table`
    width: 95%;
    margin: 0 auto;
    border-spacing: 0 5px;
`;

const Calendar = ({ dates, pickedDates, onDatePicked, datePickerType, ...props }) => {
    return (
        <StyledCalendar {...props}>
            <Row as="thead">
                <Row>{simpleCellsRender(CONSTANTS.DAYS, { className: 'dayLabel' })}</Row>
            </Row>
            <Row as="tbody">
                {renderRows(dates, pickedDates, datePickerType, onDatePicked)}
            </Row>
        </StyledCalendar>
    );
};

Calendar.propTypes = {
    dates: PropTypes.array.isRequired,
    onDatePicked: PropTypes.func,
    pickedDates: PropTypes.array,
    datePickerType: PropTypes.oneOf(['single', 'range', 'multiRange']),
};

export { Calendar };
