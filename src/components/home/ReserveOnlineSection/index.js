import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


{/** The first section below the banner. Contains the "Encontre seu guia..."
    Props: none
    **/}
export default function ReserveOnlineSection() {
    return (
        <Container maxWidth='md'>
            <Grid container justifyContent='center' alignItems='center'>
                <Grid item xs={12} sm={3} md={4}>
                    <img src='/assets/Group 272.png' alt='Img' style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={11} sm={5} md={5}>
                    <Box sx={{
                         ml: {
                            xs: 0, // theme.breakpoints.up('xs')
                            sm: 0, // theme.breakpoints.up('sm')
                            md: 6, // theme.breakpoints.up('md')
                          },
                    }} width={'100%'}>
                        <Typography variant='caption' color='textSecondary' gutterBottom>
                            RESERVE ONLINE
                        </Typography>
                        <Box my={2}>
                            <Typography variant='h5'
                                style={{
                                    fontWeight: 600,
                                    position: 'relative',
                                    background: 'url("/assets/Group 352.png") no-repeat fill',
                                    backgroundSize: 'auto 100%',
                                    backgroundPosition: '-10px -40px'
                                }}>

                                <img src='/assets/Group 352.png' alt='Img' style={{ marginTop: -9.5 * 3, marginLeft: -10 * 4, maxWidth: 350, width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }} />
                                <span style={{ zIndex: 5, position: 'absolute' }}>Encontre seu guia e faça</span>
                                <br />
                                <span>sua reserva ONLINE</span>

                            </Typography>
                        </Box>
                        <Hidden mdUp>
                            <Typography variant='body2'>
                                Sua próxima experiência a um clique, encontre seu guia, escolha a data que deseja pescar e faça sua reserva em minutos.
                            </Typography>
                        </Hidden>
                        <Hidden smDown>
                            <Typography variant='body2'>
                                Sua próxima experiência a um clique, encontre seu
                                <br />
                                guia, escolha a data que deseja pescar e faça sua
                                <br />
                                reserva em minutos.
                            </Typography>
                        </Hidden>

                    </Box >

                </Grid >
            </Grid >
        </Container>

    )
}
