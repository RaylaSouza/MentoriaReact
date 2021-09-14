import React, { useState } from 'react';
import Menu from '../../components/Menu/Menu';
import './Blocos.css';

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
            <button
                onClick={() => setBlocos(!blocos)}
            >
                Blocos
            </button>

            <button
                onClick={() => setContador(contador+1)}
            >
                Contador
            </button>
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