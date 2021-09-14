import React, { useState } from "react";
import { useStyles } from "./styles";
import Menu from '../../components/Menu/Menu';

const Linhas = () => {
    const classes = useStyles();
    const [linhas, setLinhas] = useState(false);

    const renderLinhas = () => {
        return <>
            <div className={classes.teste}>
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