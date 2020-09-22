import styled from 'styled-components';
import Fundo from '../images/fundo.jpg';

export const Caixa = styled.div`
color:(${props => props.cor});
background-image:url(${props => props.wallpaper});
background-attachment:cover;
display: flex;
justify-content: center;
height: 100vh;

`;

export const Numeros = styled.h1`
color:#F00;
display:flex;
justify-content:center;
`;

export const Corpo = styled.div`
    background-color: #fff;
    height: 300px;
    margin-top:200px;
    width:300px;

    input{
        margin-left:60px;
        margin-top:30px;
    }

    button{
        border: 1px solid green;
        margin-left: 60px;
    }
`;