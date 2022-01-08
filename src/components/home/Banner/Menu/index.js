import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import CustomLink from '../../../shared/CustomLink';
import FloatMenu from '../../../home/FloatMenu';
import UserAvatarIcon from '../../../../icons/UserAvatarIcon';
import ShoppingBagIcon from '../../../../icons/ShoppingBagIcon';
import Row from '../../../shared/Row';
import { Parallax } from 'react-parallax';
import makeStyles from '@material-ui/core/styles/makeStyles';


const MENU_ITEMS_TEXT = [
    'Viagens Completas',
    'Viagens Personalizadas',
    'Sobre Nós',
    'Destinos atendidos'
]



const useStyles = makeStyles((theme) => ({
    menuContainer: {
        display: 'flex',
        zIndex: 1200,
        left: 0,
        right: 0,
        justifyContent: 'space-between',
        color: '#fff',
        alignItems: 'center',
        transition: 'background-color 0.5s ease-in-out, margin-top 0.3s ease-in-out, width 0.5s ease-in-out, padding 0.3s ease-in',
        [theme.breakpoints.up('md')]: {
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25
        }

    }
}))

{/** The main menu of the site and the floating menu
    Props: none
    **/}
export default function Menu() {
    const classes = useStyles();

    return (
        <Parallax
            renderLayer={percentage => (
                <Container maxWidth={Math.floor(percentage) ? 'md' : 'md'} component='nav'
                    className={classes.menuContainer}
                    style={{
                        position: percentage > .8 ? 'fixed' : 'relative',
                        paddingTop: Math.floor(percentage) ? 8 : 0,
                        paddingRight: Math.floor(percentage) ? 8 * 2 : 0,
                        paddingBottom: Math.floor(percentage) ? 8 : 0,
                        paddingLeft: Math.floor(percentage) ? 8 * 2 : 0,
                        marginTop: Math.floor(percentage) ? -4 * 8 : 0,
                        left: Math.floor(percentage) ? 0 : undefined,
                        backgroundColor: `rgba(0,0,0,${(percentage > 1 ? Math.floor(percentage) : percentage - 1)})`
                    }}
                >
                    <img src='/assets/Frame_logo_white.png' alt={'Frame_logo_white.png'} height={48} />
                    <Hidden smDown>
                        <Row mx={4} width={'100%'} justifyContent='center' childrenBoxProps={{ mr: 4 }} noMarginOnLast>
                            {
                                MENU_ITEMS_TEXT.map((item) => (
                                    <CustomLink key={item} href='/' color='inherit'>
                                        {item}
                                    </CustomLink>
                                ))
                            }
                        </Row>

                        <CustomLink >
                            <Box component={'span'} display={'flex'} alignItems={'center'} >
                                <Box mr={.5} component={'span'}>Entrar</Box>
                                <UserAvatarIcon />
                            </Box>
                        </CustomLink>

                        <Box ml={1} mb={-.5}>
                            <CustomLink style={{ padding: 8 }}>
                                <ShoppingBagIcon />
                            </CustomLink>
                        </Box>
                    </Hidden>

                    <Hidden mdUp>
                        <Row justifyContent='flex-end' alignItems='center'>
                            <CustomLink >
                                <Box component={'span'} display={'flex'} alignItems={'center'} >
                                    <Box mr={.5} component={'span'}>Entrar</Box>
                                    <UserAvatarIcon />
                                </Box>
                            </CustomLink>

                            <Box ml={1} mb={-.5}>
                                <CustomLink style={{ padding: 8 }}>
                                    <ShoppingBagIcon />
                                </CustomLink>
                            </Box>
                            <FloatMenu items={MENU_ITEMS_TEXT} />
                        </Row>
                    </Hidden>

                </Container>
            )}
        >

        </Parallax>

    )
}
