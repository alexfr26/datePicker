import PropTypes from 'prop-types';

import Option from '../Option';

import StyledSelect from './style';

const Select = ({ options, valueType = 'value', ...props }) => {
    return (
        <StyledSelect {...props}>
            {options.map((value, valueIdx) => (
                <Option value={valueType === 'idx' ? valueIdx : value} key={value}>
                    {value}
                </Option>
            ))}
        </StyledSelect>
    );
};

Select.propTypes = {
    options: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.arrayOf(PropTypes.array),
    ]).isRequired,
    valueType: PropTypes.oneOf(['idx', 'value']),
};

export default Select;
