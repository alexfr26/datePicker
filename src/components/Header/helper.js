import Select from '../UI/Select';

const extractLabels = (datesArr, sep = '') =>
    datesArr.map((dateArr) => dateArr.map((dateObj) => dateObj.dateLabel).join(sep));

export const renderContent = (dates, pickerType, onChangeCb) => {
    switch (pickerType) {
        case 'single':
            return <div className="single">{extractLabels(dates)}</div>;

        case 'range':
            return <div className="range">{extractLabels(dates, ' - ')}</div>;

        case 'multiRange':
            console.log(dates);
            return (
                <Select
                    width="180px"
                    options={extractLabels(dates, ' - ')}
                    valueType="idx"
                    onChange={onChangeCb}
                    defaultValue={0}
                />
            );

        default:
            return [];
    }
};
