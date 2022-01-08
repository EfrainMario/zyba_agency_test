import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const normalStyles = {
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 8*4,
    paddingLeft: 8*4,
    marginBottom: 8*3,
    paddingTop:8*2,
    paddingBottom:8*2,
    fontWeight:'bolder',
    textTransform:'none',
    color: '#fff',
    borderRadius:10,
    width: '100%'
}

const useStyles = makeStyles((theme)=>({
    normal: {
        ...normalStyles,

//         '&:hover': {
//             color:'#ef6694',
//             backgroundColor: theme.palette.primary.light,
//             '& .MuiSvgIcon-root':{
//                 color:'#ef6694',
// 
//             },
//         },
    },


    // selected: {
    //     ...normalStyles,
    //     color:theme.palette.primary.main,
    //     border: '#4d4d4d 2px solid',
    //     backgroundColor: theme.palette.primary.main,
    //     // '& .MuiSvgIcon-root':{
    //     //     color:'#fff',
    //     // },
    // },
}));

// export default function MenuItem(props){
//     const classes = useStyles();
// 
// 
//     return <ListItem className={classes.normal} {...props}/>
//     // className={props.selected?classes.selected:classes.normal} {...props}/>
// };


export default function MenuItem(props){
    const classes = useStyles();


    return <Button disableElevation color={props.selected?'primary':'secondary'} className={classes.normal} {...props}/>
    // className={props.selected?classes.selected:classes.normal} {...props}/>
};