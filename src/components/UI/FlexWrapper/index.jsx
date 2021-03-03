import styled from 'styled-components';

const StyledFlexWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    justify-content: ${(props) => props.justify || 'stretch'};
    align-items: ${(props) => props.align || 'stretch'};
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || 'fit-content'};
    margin: ${(props) => props.margin || 0};
`;

const FlexWrapper = (props) => {
    return <StyledFlexWrapper {...props} />;
};

export { FlexWrapper };
