import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';


function MenuItemText({children, ...rest}){

    return(
        <Box fontWeight='bold' style={{}} {...rest}>
            {children}
        </Box>
    )
}



export default MenuItemText