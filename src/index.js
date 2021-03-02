import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

render(
    <>
        <Global />
        <App />
    </>,
    document.getElementById('root')
);
