import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle `
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

`;

export const Caixa = styled.div`
color:(${props => props.cor});
background-image:url(${props => props.wallpaper});
background-attachment:cover;
display: flex;
justify-content: center;
height: 100vh;
`;

export const Numeros = styled.h1`
color:orangered;
display:flex;
justify-content:center;

`;

export const Corpo = styled.div`
    background-color: #fff;
    height: 300px;
    margin-top:200px;
    width:300px;
    border-radius: 40px;
    border: 5px solid orangered;

    input{
        margin-left:60px;
        margin-top:30px;
        border: 2px solid orangered;
        border-radius:25px;
        height:30px;
        width: 160px;
        padding: 5px;
        color: orangered;
    }

    button{
        margin-top: 80px;
        border: 1px solid orangered;
        border-radius: 20px;
        margin-left: 50px;
        height: 40px;
        color:orangered;
    }
`;