import styled from 'styled-components';

import { Option } from '../Option';

const StyledSelect = styled.select`
    width: ${(props) => props.width || '100%'};
    border-radius: 4px;
`;

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

export { Select };
