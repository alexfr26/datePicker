const orderItems = (stateItem, payloadItem) =>
    stateItem[0].timeStamp > payloadItem.timeStamp
        ? [payloadItem, ...stateItem]
        : [...stateItem, payloadItem];

export default (state = [[]], { type, payload }) => {
    switch (type) {
        case 'single':
            return [[payload]];

        case 'range':
            return state.length === 0 || state[0].length === 2
                ? [[payload]]
                : [orderItems(...state, payload)];

        case 'multiRange':
            console.log(state.length, payload);
            if (state.length === 0) {
                return [[payload]];
            }

            const lastItem = state.slice(-1)[0];

            if (lastItem.length === 1) {
                return [...state.slice(0, -1), orderItems(lastItem, payload)];
            }

            if (lastItem.length === 2) {
                return [...state, [payload]];
            }

        case 'deleteDate':
            return [...state.slice(0, payload), ...state.slice(payload + 1)];

        default:
            return state;
    }
};
