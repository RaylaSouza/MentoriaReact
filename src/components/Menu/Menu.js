import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Menu = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
     var url = window.location.href.split('3000');
        if(url[1] === "/"){
            setValue(0);
        }
        if(url[1] === "/linhas"){
            setValue(1);
        }
    }, []); 

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const renderMenu = () => {
        return <>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Blocos" href="/"/>
                    <Tab label="Linhas" href="/linhas"/>
                </Tabs>
            </AppBar>
        </>
    }

    return (
        <>
            {renderMenu()}
        </>
    );
}

export default Menu;