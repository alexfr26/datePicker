import styled from 'styled-components';

const StyledButton = styled.button`
    width: 30px;
    margin: ${(props) => props.margin || '0'};
    border: ${(props) => props.border || '1px solid #3d557a'};
    border-radius: 5px;
    background-color: ${(props) => props.bgColor || '#3d557a'};
    color: #fff;
    cursor: pointer;
    outline: none;

    &:hover {
        box-shadow: ${(props) => props.hoverShadow || 'none'};
    }

    &:active {
        background-color: ${(props) => props.activeBgColor || '#fff'};
        color: ${(props) => props.bgColor || '#3d557a'};
    }
`;

const Button = (props) => <StyledButton {...props} />;

export { Button };
