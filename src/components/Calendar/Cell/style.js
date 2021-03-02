import styled from 'styled-components';

const StyledCell = styled.td`
    width: 40px;
    padding: 4px 0;
    text-align: center;
    border: 2px solid transparent;

    color: ${({ type }) => type && type !== 'curr' && 'silver'};

    &:not(.dayLabel):hover {
        border: 2px solid silver;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    &:nth-last-child(-n + 2) {
        color: ${({ type }) => (type && type !== 'curr' ? 'pink' : 'red')};
    }

    &.dayLabel {
        font-weight: bold;
    }

    &.picked {
        background-color: #0f5099;
        color: #fff;
        font-weight: bold;
        border-radius: 5px;
    }

    &.pickedStart {
        background-color: #0f5099;
        color: #fff;
        font-weight: bold;
        border-radius: 5px 0 0 5px;
    }

    &.pickedEnd {
        background-color: #0f5099;
        color: #fff;
        font-weight: bold;
        border-radius: 0 5px 5px 0;
    }

    &.pickedInRange {
        background-color: #daedf4;
    }
`;

export { StyledCell };
