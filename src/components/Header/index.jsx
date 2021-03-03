import PropTypes from 'prop-types';
import styled from 'styled-components';

import { renderContent } from './helper';

import { FlexWrapper } from '../UI/FlexWrapper';

const StyledHeader = styled.div`
    div.single {
        width: 100px;
        height: 22px;
        border: 1px solid grey;
        border-radius: 4px;
        text-align: center;
    }

    div.range {
        width: 200px;
        height: 22px;
        border: 1px solid grey;
        border-radius: 4px;
        text-align: center;
    }
`;

const Header = ({ pickedDates, datePickerType, ...props }) => {
    return (
        <FlexWrapper margin="10px auto 5px" width="90%" justify="space-around">
            <StyledHeader {...props}>
                {renderContent(pickedDates, datePickerType)}
            </StyledHeader>
        </FlexWrapper>
    );
};

Header.propTypes = {
    pickedDates: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.shape({
                timeStamp: PropTypes.number,
                dataLabel: PropTypes.string,
            })
        ),
        PropTypes.arrayOf(
            PropTypes.arrayOf(
                PropTypes.shape({
                    timeStamp: PropTypes.number,
                    dataLabel: PropTypes.string,
                })
            )
        ),
    ]),
    datePickerType: PropTypes.oneOf(['single', 'range', 'multiRange']),
};

export { Header };
