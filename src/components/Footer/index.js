import React from 'react'
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import FooterInfo from './FooterInfo/index.js';
import Row from '../shared/Row'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '../../icons/FacebookIcon/index.js'
import YoutubeIcon from '../../icons/YoutubeIcon/index.js'

const FOOTER_ITEMS = [
    {
        title: 'Zyba na Mídia',
        subtitles: [
            'Onde a Zyba é notícia',
            'Media Kit para download',
            'Assessoria de imprensa'
        ]
    },
    {
        title: 'Seja Nosso Parceiro',
        subtitles: [
            'Detalhes sobre parcerias',
            'Contato para parcerias',
        ]
    },
    {
        title: 'Trabalhe conosco',
        subtitles: [
            'Vagas abertas',
            'Cadastre seu currículo'
        ]
    },
    {
        subtitles: [
            'Perguntas frequentes',
            'Termos de compra e cancelamento',
            'Privacidade e segurança',
        ]
    },
    {
        title: 'Contato',
        subtitles: [(
            <Row childrenBoxProps={{ mr: .2, }}>
                <WhatsAppIcon fontSize='small'/>
                <span>+55 19 99830-5875 </span>
            </Row>
        ),
            'agenciazyba@gmail.com',
        ]
    }

]
{/** The Footer component 
    Props: none
    **/}
export default function Footer() {
    return (
        <Box component='footer' >
            <Box width={50} height={50} style={{background:'url("/assets/curva.png")'}} ml={0}/>
            <Box py={4} bgcolor='#F7F7F7' borderRadius={'0px 50px 0px 0px'}>
                <Container maxWidth='md'>
                    <Box py={4} display={'flex'} alignItems={'center'} my={2} color='#000'>
                        <div style={{ flexGrow: 1 }}>
                            <img src='/assets/Frame_black_logo.png' height={48} alt='Agência Zyba logo' />
                        </div>
                        <IconButton color='inherit'>
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color='inherit'>
                            <FacebookIcon fontSize='small'/>
                        </IconButton>
                        <IconButton color='inherit'>
                            <YoutubeIcon/>
                        </IconButton>
                    </Box>

                    <Grid container justifyContent='space-between'>
                        {
                            FOOTER_ITEMS.map((item, index) => (
                                <Grid key={index} item xs={5} sm={3} md={2} lg={2}>
                                    <FooterInfo title={item.title} subtitles={item.subtitles} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>

            </Box>

            <Box py={1} style={{ color: '#fff', backgroundColor: '#000', textAlign: 'center' }} fontSize={'caption.fontSize'}>
                {
                    'Umi Collective © 2021 Agência zyba'.toUpperCase()
                }
            </Box>
        </Box>
    )
}
