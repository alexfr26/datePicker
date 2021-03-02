import styled from 'styled-components';

const StyledButton = styled.button`
    width: 30px;
    background-color: #3d557a;
    border: 1px solid #3d557a;
    border-radius: 5px;
    outline: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        box-shadow: ${(props) => props.hoverShadow || 'none'};
    }

    &:active {
        background-color: #fff;
        color: #3d557a;
    }
`;

const Button = (props) => {
    return <StyledButton {...props} />;
};

export { Button };
