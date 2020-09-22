import React, {useState} from 'react';
import { Caixa, Numeros, Corpo } from '../../styles/styles';
import Fundo from '../../images/fundo.jpg'

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
    Sorteio(5)
    const nomeInicial = 'Anderson';
    const NovoNome = 'junior'
    const NumerosIniciais = Array(props.quantidade || 6).fill(0);
    const [dados, setDados] = useState(NumerosIniciais);
    const [valor, setValor] = useState(NumerosIniciais);
    const [nome, setNome] = useState(nomeInicial);
    const quantia = valor === 0 ?  6 : valor;

    return(
        <Caixa fonte={20} wallpaper={Fundo}> 
            <Corpo>
                <input type="number" value={valor} onChange={e => {setValor(+e.target.value);}} />
                <Numeros>{dados.join('  ')}</Numeros>
                <button onClick={() => {setDados(Sorteio(quantia))}}>Sortear</button>
                <button onClick={() => {setDados(NumerosIniciais)}}>Novo Sorteio</button>
            </Corpo>
        </Caixa>
    );
}