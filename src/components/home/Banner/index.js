import React from 'react'
import Box from '@material-ui/core/Box';
import Menu from './Menu/index.js';
import Discovery from './Discovery/index.js';
import MainText from './Menu/MainText.js';

{/** Contains the menu and banner components 
    Props: none
    **/}
export default function Banner() {

    return (
        <Discovery>


            <Menu />

            <MainText />

            {/* Arrow - down */}
            <Box mx={'auto'} mt={'auto'} width={50} height={50} pb={3} component={'img'} src='/icons/arrowdown_icon.svg' alt='arrowdown_icon'/>
            
        </Discovery>


    )
}
