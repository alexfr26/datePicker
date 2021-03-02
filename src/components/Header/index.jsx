import styled from 'styled-components';

import { FlexWrapper } from '../FlexWrapper';
import { Select } from '../Form/Select';
import { Option } from '../Form/Option';

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

const Header = ({ pickedDates: pd, datePickerType: pdType, ...props }) => {
    return (
        <FlexWrapper margin="10px auto 5px" width="90%" justify="space-around">
            <StyledHeader {...props}>
                {pdType === 'single' && (
                    <div className="single">{pd.length ? pd[0].dateLabel : ''}</div>
                )}

                {pdType === 'range' && (
                    <div className="range">
                        {pd.length
                            ? `${pd[0].dateLabel} - ${pd[1] ? pd[1].dateLabel : ''}`
                            : ''}
                    </div>
                )}

                {pdType === 'multiRange' && (
                    <Select
                        width="180px"
                        options={
                            pd.length
                                ? pd.map(
                                      (el) =>
                                          `${el[0].dateLabel} - ${
                                              el[1] ? el[1].dateLabel : ''
                                          }`
                                  )
                                : [[]]
                        }
                    />
                )}
            </StyledHeader>
        </FlexWrapper>
    );
};

export { Header };
