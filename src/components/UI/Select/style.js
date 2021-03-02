import styled from 'styled-components';

const StyledSelect = styled.select`
    width: ${(props) => props.width || '100%'};
    border-radius: 4px;
`;

export { StyledSelect };
