import { CONSTANTS } from '../../lib';

// Components
import { Select } from '../UI/Select';
import { FlexWrapper } from '../UI/FlexWrapper';
import { useMemo } from 'react';

const Form = ({ values, onFormChange, ...props }) => {
    const wrapperProps = useMemo(
        () => ({
            width: '60%',
            height: '22px',
            justify: 'space-evenly',
            align: 'stretch',
            ...props,
        }),
        [props]
    );

    return (
        <FlexWrapper {...wrapperProps}>
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
        </FlexWrapper>
    );
};

export { Form };
