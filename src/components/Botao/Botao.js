import React from 'react';
import { useStyles } from "./styles";

const Botao = ({name}) => {
    const classes = useStyles();

    const renderBotao = () => {
        return <>
            <button className={classes.btn}> {name} </button>
        </>
    }

    return (
        <>
            {renderBotao()}
        </>
    );
}

export default Botao;