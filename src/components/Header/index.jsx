import styled from 'styled-components';

import { FlexWrapper } from '../UI/FlexWrapper';
import { Select } from '../UI/Select';

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
    const renderOptions = (arrOfLabels) => {
        let options = [[]];
        if (arrOfLabels.length)
            options = arrOfLabels.map(
                (el) => `${el[0].dateLabel} - ${el[1] ? el[1].dateLabel : ''}`
            );

        return options;
    };

    const renderContent = (dates, pickerType) => {
        switch (pickerType) {
            case 'single':
                return (
                    <div className="single">{dates.length ? dates[0].dateLabel : ''}</div>
                );

            case 'range':
                let content = '';
                if (dates.length)
                    content = `${dates[0].dateLabel} - ${
                        dates[1] ? dates[1].dateLabel : ''
                    }`;

                return <div className="range">{content}</div>;

            case 'multiRange':
                return <Select width="180px" options={renderOptions(dates)} />;

            default:
                return pd;
        }
    };

    return (
        <FlexWrapper margin="10px auto 5px" width="90%" justify="space-around">
            <StyledHeader {...props}>
                {renderContent(pickedDates, datePickerType)}
            </StyledHeader>
        </FlexWrapper>
    );
};

export { Header };
