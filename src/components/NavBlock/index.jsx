import PropTypes from 'prop-types';

import { CONSTANTS } from '../../lib';

import Button from '../UI/Button';
import FlexWrapper from '../UI/FlexWrapper';
import Select from '../UI/Select';

const NavBlock = ({ currDate, onBtnClick, onFormChange, ...props }) => {
    return (
        <FlexWrapper justify="space-evenly" margin="10px 0" {...props}>
            <Button
                onClick={() => onBtnClick('-')}
                hoverShadow="2px 2px 2px black"
                aria-label="Prev month button"
            >
                🢀
            </Button>

            <Select
                options={CONSTANTS.MONTHS}
                onChange={onFormChange}
                value={currDate.month}
                valueType="idx"
                name="month"
                width={'30%'}
                aria-label="Select month"
            />

            <Select
                options={CONSTANTS.YEARS}
                onChange={onFormChange}
                value={currDate.year}
                valueType="value"
                name="year"
                width={'20%'}
                aria-label="Select year"
            />

            <Button
                onClick={() => onBtnClick('+')}
                hoverShadow="-2px 2px 2px black"
                aria-label="Next month button"
            >
                🢂
            </Button>
        </FlexWrapper>
    );
};

NavBlock.propTypes = {
    currDate: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }).isRequired,
    onBtnClick: PropTypes.func.isRequired,
    onFormChange: PropTypes.func.isRequired,
};

export default NavBlock;
