import React, {useState} from 'react';
import { Caixa, Numeros, Corpo, Credits, Title} from '../../styles/styles';
import  '../../styles/styles';
import '../../styles/Reset.css';

export default props =>{

    //Logica para o sorteio
    const NumeroAlatorio = _ =>{
        let numero = Math.floor(Math.random() * (60 - 1)+1);
        return numero;
    };
    const Sorteio = quantidade =>{
        let sorteados = [];
    
        for(let i = 1; i <= quantidade; i++){
            let numero = NumeroAlatorio();
            sorteados.push(numero);
        }
        return sorteados;
    } 

    const NumerosIniciais = Array(props.quantidade || 6).fill(0);
    const [dados, setDados] = useState(NumerosIniciais);
    const [valor, setValor] = useState(NumerosIniciais);
    const quantia = valor === 0 ?  6 : valor;

    //Limpa os campos para gerar um novo sorteio
    const Reseta = _ => {
        setValor(NumerosIniciais);
        setDados(NumerosIniciais);
    }

    const VerificaSorteio = _ =>{
        if(valor == NumerosIniciais){
            let MensagemInserevalor = "Primeiro Insira os dados!";
            setDados(MensagemInserevalor)
        }
        else{
            Reseta();
        }
    }

    return(
        <Caixa > 
            <Title> React Sorteador</Title>
            <Corpo className="Corpo">
                <input type="number" placeholder="Digite aqui a quantia de numeros" value={valor} onChange={e => {setValor(+e.target.value);}} />
                <Numeros>{dados.join('  ')}</Numeros>
                <button onClick={() => {setDados(Sorteio(quantia))}}>Sortear</button>
                <button onClick={() => {VerificaSorteio()}}>Novo Sorteio</button>
            </Corpo>
            <Credits>
                Developed BY Anderson ARORJ.
            </Credits>
        </Caixa>
    );
}