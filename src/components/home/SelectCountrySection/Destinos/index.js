import React from 'react'
import DestinoCard from './DestinoCard'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles((theme)=>({
    container:{
        transition: 'height 4s ease-in-out',
    }
}))


{/** Displays available destinations
    Props: 
        destinos (array of objects): destinations to be presented
            See the file "src/cosnts/destinos.js" to know the structure of each destination
    **/}
export default function Destinos({ destinos }) {
    const classes = useStyles();

    return (
        <Container maxWidth='md' className={classes.container}>
            <Box >
                <Grid container spacing={4}>
                    {
                        !!destinos && destinos.map((destino, index) => (
                            <Grid key={destino.id} item xs={12} sm={6} md={4}>
                                <DestinoCard {...destino} index={index} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    )
}
