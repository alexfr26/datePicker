import { memo } from 'react';
import { StyledCell } from './style';

const Cell = memo((props) => {
    return <StyledCell {...props} />;
});

export { Cell };
