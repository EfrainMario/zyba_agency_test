import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CustomLink from '../../shared/CustomLink';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { useRouter } from 'next/router';


const useStyles = makeStyles({
  drawer: {
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff'
  },
});

export default function FloatMenu({ items }) {
  const router = useRouter();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    setOpen(!open);
  };

  const handleMenuSelectedIndexChange = (value) => () => {

    // if (router.pathname !== '/')
    //   router.push('/');

    setOpen(false);
  }

  return (
    <>
      <IconButton color="inherit" onClick={toggleDrawer}>
        <MenuRoundedIcon />
      </IconButton>
      <Drawer open={open} anchor="right" onClose={toggleDrawer}>
        <Container maxWidth='md' className={classes.drawer}>
          <Box display='flex' justifyContent={'flex-end'} mt={2}>
            <IconButton color="inherit" onClick={toggleDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Typography gutterBottom variant='h6'>
            Menu
          </Typography>
          {
            items.map((item, index) => (
              <Box my={3} key={index} >
                <CustomLink href={`/${item}`} onClick={handleMenuSelectedIndexChange(index)} variant={'subtitle2'}>
                  {item}
                </CustomLink>
              </Box>

            ))}
        </Container>
      </Drawer>
    </>
  );
}
