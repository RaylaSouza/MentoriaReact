import React, { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import Button from '@material-ui/core/Button';
import './Blocos.css';
import Botao from '../../components/Botao/Botao';

const Blocos = (props) => {
    const [blocos, setBlocos] = useState(false);
    const [contador, setContador] = useState(0);

    const renderBlocos = () => {
        return <>
            <div>
                bloco1
            </div>
            <div>
                bloco2
            </div>
            <div>
                bloco3
            </div>
            <div>
                bloco4
            </div>
        </>  
    };


    const renderBotoes = () => {
        return <>
        <div class='flex'>
            <button
                onClick={() => setBlocos(!blocos)}
            >
                Blocos
            </button>

            <Button variant="contained" color="secondary" onClick={() => setContador(contador+1)}>
                Contador
            </Button>
            <Botao name="Marcos"/>
            <Botao name="Rayla"/>
        </div>
        </>
    }

    const renderContador = () => {
        return <>
            <div class="testeCss">
                {contador}
            </div>
        </>  
    };

    return(
        <>
            <Menu/>
            {renderBotoes()}
            {renderContador()}
            {blocos ? renderBlocos(): null}
        </>

    );
};

export default Blocos;