import styled from 'styled-components';

export default styled.button`
    width: 30px;
    margin: ${({ margin }) => margin || '0'};
    border: ${({ border }) => border || '1px solid #3d557a'};
    border-radius: 5px;
    background-color: ${({ bgColor }) => bgColor || '#3d557a'};
    color: #fff;
    cursor: pointer;

    &:hover {
        box-shadow: ${({ hoverShadow }) => hoverShadow || 'none'};
    }

    &:active {
        background-color: ${({ activeBgColor }) => activeBgColor || '#fff'};
        color: ${({ bgColor }) => bgColor || '#3d557a'};
    }
`;
