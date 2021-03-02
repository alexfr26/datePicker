const initialState = [];

const orderItems = (stateItem, payloadItem) => {
    return stateItem[0].timeStamp > payloadItem.timeStamp
        ? [payloadItem, ...stateItem]
        : [...stateItem, payloadItem];
};

const datePickerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'single':
            return [payload];

        case 'range':
            if (state.length === 0 || state.length === 2) {
                return [payload];
            }
            return orderItems(state, payload);

        case 'multiRange':
            if (state.length === 0) {
                return [[payload]];
            }

            const lastItem = state.slice(-1)[0];

            if (lastItem.length === 1) {
                if (lastItem[0].timeStamp > payload.timeStamp) {
                    return [...state.slice(0, -1), [payload, ...lastItem]];
                }

                return [...state.slice(0, -1), [...lastItem, payload]];
            }

            if (lastItem.length === 2) {
                return [...state, [payload]];
            }

        default:
            return state;
    }
};

export { datePickerReducer };
