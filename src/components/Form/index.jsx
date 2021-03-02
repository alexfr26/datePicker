import styled from 'styled-components';

import { CONSTANTS } from '../../lib';

import { Select } from './Select';

const StyledForm = styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    width: 60%;
    height: 22px;
`;

const Form = ({ values, onFormChanged, ...props }) => {
    return (
        <StyledForm {...props}>
            <Select
                options={CONSTANTS.MONTHS}
                name="month"
                value={values.month}
                valueType="idx"
                width={'50%'}
                onChange={onFormChanged}
            />
            <Select
                options={CONSTANTS.YEARS}
                name="year"
                value={values.year}
                width={'30%'}
                onChange={onFormChanged}
            />
        </StyledForm>
    );
};

export { Form };
