import styled from 'styled-components';

export const Caixa = styled.div`
background: #f857a6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
height: 100vh;
`;

export const Numeros = styled.h1`
color:#f857a6;
display:flex;
justify-content:center;
align-items:center;
font-size:40px;
text-align: center;

`;

export const Title = styled.h1`
    font-size:45px;
    font-weight:bolder;
    color: #93edc7;
    letter-spacing:-4px;
    position:absolute;
    top:2%; 
`;

export const Corpo = styled.div`
    background-color: #FFFFFF;
    height: 80%;
    margin-top:10%;
    width:80%;
    border-radius: 40px;
    border: 5px double #f857a6;

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    input{
        margin-top:20px;
        border: 2px solid #f857a6;
        border-radius:10px;
        height:5%;
        width: 90%;
        padding: 15px 20px;
        color: gray;
    }

    button{
        
        border: 2px solid #f857a6;
        background:#FFFFFF;
        border-radius: 20px;
        height: 40px;
        width:80%;
        color:#f857a6;
        padding:10px 30%;
        font-size:11px;
        font-weight:bolder;
    }

    button:hover{
        background:#f857a6;
        color:white;  
    }
`;

export const Credits = styled.div`
        padding-top:2%;     
        font-size:10px;
        color:#FFFFFF;
        font-weight:bolder;
`;