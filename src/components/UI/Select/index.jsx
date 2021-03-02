import PropTypes from 'prop-types';

import { Option } from '../Option';

import { StyledSelect } from './style';

const Select = ({ options, valueType, ...props }) => {
    const renderOptions = (options) => {
        return options.map((value, valueIdx) => {
            return (
                <Option value={valueType === 'idx' ? valueIdx : value} key={value}>
                    {value}
                </Option>
            );
        });
    };

    return <StyledSelect {...props}>{renderOptions(options)}</StyledSelect>;
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    valueType: PropTypes.string,
    valueType: PropTypes.oneOf(['idx', 'value']),
};

export { Select };
