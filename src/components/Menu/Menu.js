import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Menu = () => {

    const renderMenu = () => {
        return <>
            <AppBar position="static">
                <Tabs>
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