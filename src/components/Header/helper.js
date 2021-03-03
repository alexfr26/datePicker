import { Select } from '../UI/Select';

export const renderOptions = (arrOfLabels) => {
    let options = [[]];
    if (arrOfLabels.length)
        options = arrOfLabels.map(
            (el) => `${el[0].dateLabel} - ${el[1] ? el[1].dateLabel : ''}`
        );

    return options;
};

export const renderContent = (dates, pickerType, onChangeCb) => {
    switch (pickerType) {
        case 'single':
            return <div className="single">{dates.length ? dates[0].dateLabel : ''}</div>;

        case 'range':
            let content = '';
            if (dates.length)
                content = `${dates[0].dateLabel} - ${dates[1] ? dates[1].dateLabel : ''}`;

            return <div className="range">{content}</div>;

        case 'multiRange':
            return (
                <Select
                    width="180px"
                    options={renderOptions(dates)}
                    valueType="idx"
                    onChange={onChangeCb}
                    defaultValue={0}
                />
            );

        default:
            return dates;
    }
};
