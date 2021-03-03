import PropTypes from 'prop-types';

import { Button } from '../UI/Button';
import { Form } from '../Form';
import { FlexWrapper } from '../UI/FlexWrapper';

const NavBlock = ({ currDate, onBtnClick, onFormChange, ...props }) => {
    return (
        <FlexWrapper justify="space-evenly" margin="10px 0 5px 0" {...props}>
            <Button hoverShadow="2px 2px 2px black" onClick={() => onBtnClick('-')}>
                🢀
            </Button>

            <Form onFormChange={onFormChange} values={currDate} />

            <Button hoverShadow="-2px 2px 2px black" onClick={() => onBtnClick('+')}>
                🢂
            </Button>
        </FlexWrapper>
    );
};

NavBlock.propTypes = {
    currDate: PropTypes.shape({
        year: PropTypes.number,
        month: PropTypes.number,
    }),
    onBtnClick: PropTypes.func,
    onFormChange: PropTypes.func,
};

export { NavBlock };
