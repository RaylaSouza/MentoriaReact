import React, { useState } from "react";
import Menu from '../Menu/Menu';

const Linhas = () => {
    const [linhas, setLinhas] = useState(false);

    const renderLinhas = () => {
        return <>
            <div>
                -----
            </div>
            <div>
                -----
            </div>
            <div>
                -----
            </div>
            <div>
                -----
            </div>
        </>  
    };

    const renderBotoes = () => {
        return <>
            <button
                onClick={() => setLinhas(!linhas)}
            >
                Linhas
            </button>
        </>
    }

    return (
        < >
            <Menu/>
            {renderBotoes()}
            {linhas ? renderLinhas(): null}
        </>
    );

}

export default Linhas;