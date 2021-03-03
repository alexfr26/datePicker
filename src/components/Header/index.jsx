import { useState } from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { renderContent } from './helper';

import { FlexWrapper } from '../UI/FlexWrapper';
import { Button } from '../UI/Button';

const StyledHeader = styled(FlexWrapper)`
    div.single {
        width: 100px;
        height: 22px;
        border: 1px solid grey;
        border-radius: 4px;
        text-align: center;
    }

    div.range {
        width: 200px;
        height: 22px;
        border: 1px solid grey;
        border-radius: 4px;
        text-align: center;
    }
`;

const Header = ({ pickedDates, datePickerType, handleDeletePickedDate, ...props }) => {
    const [selectedDateIdx, setSelectedDateIdx] = useState(0);

    const handleSelectDate = (e) => {
        setSelectedDateIdx(Number(e.target.value));
    };

    const onDeletePickedDate = () => {
        handleDeletePickedDate(selectedDateIdx);
        setSelectedDateIdx(0);
    };

    return (
        <StyledHeader margin="10px auto 5px" width="90%" justify="center" {...props}>
            {renderContent(pickedDates, datePickerType, handleSelectDate)}
            <Button
                bgColor="#fff"
                activeBgColor="pink"
                hoverShadow="2px 2px 2px black"
                margin="0 0 0 10px"
                onClick={onDeletePickedDate}
            >
                ❌
            </Button>
        </StyledHeader>
    );
};

Header.propTypes = {
    pickedDates: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                timeStamp: PropTypes.number,
                dataLabel: PropTypes.string,
            })
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    timeStamp: PropTypes.number,
                    dataLabel: PropTypes.string,
                })
            )
        ),
    ]),
    datePickerType: PropTypes.oneOf(['single', 'range', 'multiRange']).isRequired,
    handleDeletePickedDate: PropTypes.func,
};

export { Header };
