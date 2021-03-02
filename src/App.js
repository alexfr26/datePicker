import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import { DatePicker } from './components/DatePicker';

const AppWrapper = styled.div`
    margin: 100px auto;
`;

const App = () => {
    return (
        <AppWrapper>
            {/* SUPPORTED TYPES: "single", "range", "multiRange" */}
            <DatePicker type="multiRange" />
        </AppWrapper>
    );
};

export default hot(App);
