import styled from 'styled-components';

import { CONSTANTS } from '../../lib';

import { Select } from '../UI/Select';

const StyledForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 60%;
    height: 22px;
`;

const Form = ({ values, onFormChange, ...props }) => {
    return (
        <StyledForm {...props}>
            <Select
                options={CONSTANTS.MONTHS}
                name="month"
                value={values.month}
                valueType="idx"
                width={'50%'}
                onChange={onFormChange}
            />
            <Select
                options={CONSTANTS.YEARS}
                name="year"
                value={values.year}
                width={'30%'}
                onChange={onFormChange}
            />
        </StyledForm>
    );
};

export { Form };
