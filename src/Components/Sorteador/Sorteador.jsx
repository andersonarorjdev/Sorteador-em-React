import React, {useState} from 'react';
import { Caixa, Numeros, Corpo } from '../../styles/styles';
import Fundo from '../../images/fundo.jpg'
import '../../styles/styles';

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

    const Reseta = _ => {
        setValor(NumerosIniciais);
        setDados(NumerosIniciais);
    }

    return(
        <Caixa fonte={20} wallpaper={Fundo}> 
            <Corpo>
                <input type="number" value={valor} onChange={e => {setValor(+e.target.value);}} />
                <Numeros>
                    {dados.join('  ')}
                </Numeros>
                <button onClick={() => {setDados(Sorteio(quantia))}}>Sortear</button>
                <button onClick={() => {Reseta()}}>Novo Sorteio</button>
            </Corpo>
        </Caixa>
    );
}