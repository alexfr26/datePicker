import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: ${({ justify }) => justify || 'stretch'};
    align-items: ${({ align }) => align || 'stretch'};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || 'fit-content'};
    margin: ${({ margin }) => margin || 0};
`;
