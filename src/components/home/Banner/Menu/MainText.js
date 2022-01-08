import React from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

//A way to declare material-ui css classes
const useStyles = makeStyles((theme) => ({
    container: {
        height: 230,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            // height: 600
        },
        [theme.breakpoints.up('lg')]: {
            height: 360
        },
    }
}))

{/** Text that appears in the middle of the Banner
    Props: material-ui Link component props
    **/}
export default function MainText() {
    const classes = useStyles();

    return (
        <Box flexGrow={1} textAlign='center' className={classes.container} mx={2}>
            <Box >
                <Typography style={{ fontWeight: 600 }} variant='h4' gutterBottom>DESCUBRA NOSSOS GUIAS</Typography>
                <Typography variant='subtitle1' style={{ maxWidth: 380, width: '100%', margin: '0 auto' }}>Que tal dar uma escapa para pesca? Preparamos para você uma seleção com os melhores guias</Typography>
            </Box>

            
        </Box>
    )
}
