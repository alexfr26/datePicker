import styled from 'styled-components';

import { CONSTANTS } from '../../lib';

// Components
import { Cell } from './Cell';
import { Row } from './Row';

const StyledCalendar = styled.table`
    width: 95%;
    margin: 0 auto;
    border-spacing: 0 5px;
`;

const checkPicked = (cellKey, pickedData, dpType) => {
    switch (dpType) {
        case 'single':
            return cellKey === pickedData[0].timeStamp ? 'picked' : '';
        case 'range':
            const len = pickedData.length;
            if (len === 1) {
                return cellKey === pickedData[0].timeStamp ? 'pickedStart' : '';
            }

            if (len === 2) {
                return cellKey === pickedData[0].timeStamp
                    ? 'pickedStart'
                    : cellKey === pickedData[1].timeStamp
                    ? 'pickedEnd'
                    : cellKey > pickedData[0].timeStamp &&
                      cellKey < pickedData[1].timeStamp
                    ? 'pickedInRange'
                    : '';
            }
        case 'multiRange':
            let classes = '';
            for (let tuple of pickedData) {
                const len = tuple.length;

                if (len === 1) {
                    classes += cellKey === tuple[0].timeStamp ? ' pickedStart' : '';
                }

                if (len === 2) {
                    classes +=
                        cellKey === tuple[0].timeStamp
                            ? ' pickedStart'
                            : cellKey === tuple[1].timeStamp
                            ? ' pickedEnd'
                            : cellKey > tuple[0].timeStamp && cellKey < tuple[1].timeStamp
                            ? ' pickedInRange'
                            : '';
                }
            }

            return classes;
        default:
            return '';
    }
};

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

export { Calendar };
