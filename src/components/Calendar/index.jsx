import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CONSTANTS } from '../../lib';
import { checkPicked } from './helper';

// Components
import { Cell } from './Cell';
import { Row } from './Row';

const StyledCalendar = styled.table`
    width: 95%;
    margin: 0 auto;
    border-spacing: 0 5px;
`;

const renderCells = (cells, pickedCells, dpType, handlerFn) => {
    return cells.map((props) => {
        const { value, key, ...restProps } = props;
        const classes = pickedCells.length ? checkPicked(key, pickedCells, dpType) : '';
        return (
            <Cell
                key={key}
                className={classes}
                id={key}
                onClick={() => handlerFn(key)}
                {...restProps}
            >
                {value}
            </Cell>
        );
    });
};

const renderRows = (rows, pickedCells, dpType, handlerFn) => {
    return rows.map((cells, idx) => {
        const rowKey = `${idx}-${new Date().getTime()}`;
        return (
            <Row as="tr" key={rowKey}>
                {renderCells(cells, pickedCells, dpType, handlerFn)}
            </Row>
        );
    });
};

const simpleCellsRender = (cells, props) => {
    return cells.map((cellValue) => {
        return (
            <Cell key={cellValue} {...props}>
                {cellValue}
            </Cell>
        );
    });
};

const Calendar = ({ dates, onDatePicked, pickedDates, datePickerType, ...props }) => {
    console.log(dates);
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
};

export { Calendar };
