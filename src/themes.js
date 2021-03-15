import {createGlobalStyle} from 'styled-components';
import img from '../src/img/bg.jpg'

export const redTheme = {
    body:'#DC143C',
    fontColor: '#000'
};

export const darkTheme = {
    body:"#000",
    fontColor: "#fff"
};

export const blueTheme = {
    body:"#0000FF",
    fontColor: "#fff"
};

export const GlobalStyles = createGlobalStyle `
    body {
        ${'' /* background: url('./img/bg.jpg') no-repeat center center/cover; */}
        ${'' /* background-image: url(${img}); */}
      
        background-color: ${props => props.theme.body};
    }
`;