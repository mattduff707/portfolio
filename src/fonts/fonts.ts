import { createGlobalStyle } from "styled-components";
import Baron from "./ChelaOne.ttf";
import Rowdies from "./Mitr-Medium.ttf";

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
