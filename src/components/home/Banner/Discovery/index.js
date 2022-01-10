import React from "react";
import Box from "@material-ui/core/Box";
import Head from 'next/head'
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    responsiveSpace: {
        background: `center / cover no-repeat url("/assets/BANNER 2_grandiented.png") `,
        height: 750,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'space-between',
        color: '#fff',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            background: `center / cover no-repeat url("/assets/hero_banner_xs_sm.png") `,
            backgroundSize: 'contain 100%',
            borderBottomLeftRadius: 50,
            backgroundColor: '#f7f7f7',
            minHeight: 100,
            height: 'calc(100vh - 10px)',
        },
        [theme.breakpoints.up('sm')]: {
            backgroundSize: 'contain 100%',
            backgroundPosition: 'top',
            minHeight: 550,
            height: 'fit-content',
        },
        [theme.breakpoints.up('md')]: {
            backgroundSize: 'contain',
            backgroundColor: '#fff',
            height: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundSize: 'cover',
            height: 'auto',
        },

    },
}));

{/** It is a flex-type component and the steering column
    Props: children
    **/}
export default function Discovery({ children }) {
    //A Hook that grabs the classes created at the beginning of this file
    const classes = useStyles();



    return (
        //The Box component serves as a wrapper component for most of the CSS utility needs.
        <Box component={'header'} className={classes.responsiveSpace} pt={4} pb={8}>
            {children}
        </Box>
    )

}