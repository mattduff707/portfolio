import { createGlobalStyle } from 'styled-components';
import Baron from './Baron.ttf';
import Rowdies from './Rowdies.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Baron';
        src: local('Baron'),
        url(${Baron}) format('truetype');
    }
    @font-face {
        font-family: 'Rowdies';
        src: local('Rowdies'),
        url(${Rowdies}) format('truetype');
    }
`;
