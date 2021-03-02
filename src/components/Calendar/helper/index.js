export const checkPicked = (cellKey, pDate, dpType) => {
    switch (dpType) {
        case 'single':
            return cellKey === pDate[0].timeStamp ? 'picked' : '';

        case 'range':
            const len = pDate.length;
            if (len === 1) {
                return cellKey === pDate[0].timeStamp ? 'pickedStart' : '';
            }

            if (len === 2) {
                return cellKey === pDate[0].timeStamp
                    ? 'pickedStart'
                    : cellKey === pDate[1].timeStamp
                    ? 'pickedEnd'
                    : cellKey > pDate[0].timeStamp && cellKey < pDate[1].timeStamp
                    ? 'pickedInRange'
                    : '';
            }

        case 'multiRange':
            let classes = '';
            for (let tuple of pDate) {
                const len = tuple.length;

                if (len === 1) {
                    classes += cellKey === tuple[0].timeStamp ? ' pickedStart' : '';
                }

                if (len === 2) {
                    classes +=
                        cellKey === tuple[0].timeStamp
                            ? ' pickedStart'
                            : cellKey === tuple[1].timeStamp
                            ? ' pickedEnd'
                            : cellKey > tuple[0].timeStamp && cellKey < tuple[1].timeStamp
                            ? ' pickedInRange'
                            : '';
                }
            }

            return classes;
        default:
            return '';
    }
};
