import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '../../../../icons/PlaceIcon';
import Row from '../../../shared/Row.js'
import Grow from '@material-ui/core/Grow'


{/** Each destination presentation
    Props: 
        id (string or int): unique identifier for a destination
         title (string): the name of the destination
         location (string): the locale of the destination
         country (string): the country of the destination
         countryFlagUrl (string): the country flag url of the destination
         pictureUrl (string): the picture url of the destination
    **/}
export default function DestinoCard({ id, title, location, country, countryFlagUrl, pictureUrl }) {
    const [mounted, setMounted] = React.useState(false);


    React.useEffect(() => {
        setMounted(true);

        return () => {

        }
    }, [])



    return (
        <Grow in={mounted} timeout={300}>
            <Box position='relative' borderRadius={10} overflow={'hidden'}>
                <Box width={'100%'} mb={-0.9} component={'img'} src={pictureUrl} alt={title} />

                <Box display={'flex'} p={2} position={'absolute'} bottom={0} width={'100%'} alignItems={'center'}
                    style={{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 55.2%, rgba(0, 0, 0, 0.6) 100%)` }}
                >
                    <Box color='#fff' textAlign={'left'} flexGrow={1}>
                        <Typography variant='h6'>{title}</Typography>

                        <Row >
                            <PlaceIcon />
                            <Typography variant='caption' >{location} - {country}</Typography>
                        </Row>

                    </Box>
                    <img src={countryFlagUrl} alt={location} height={30} />

                </Box>
            </Box>
        </Grow>
    )
}
