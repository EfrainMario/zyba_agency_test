import React from 'react'
import Box from '@material-ui/core/Box';
import LoadableButton from '../../shared/LoadableButton';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Destinos from './Destinos/index.js';
import CategoryItem from './CategoryItem';
import DESTINOS from '../../../consts/destinos.js';
import Select from '../../shared/Select';
import getCountriesOf from '../../../utils/getCountriesOf';



const CATEGORIAS = [
    'Todos',
    'Nacionais',
    'Internacionais',
]

{/** The section that allows the user to see the destinations available to make a reservation
    Props: 
        initialData (array of objects): first destinations that the user can select.
            See the file "src/cosnts/destinos.js" to know the structure of each destination
    **/}
export default function SelectCountrySection({ initialData }) {
    const [destinos, setDestinos] = React.useState({
        loading: true,
        error: false,
        data: initialData
    });

    const [pageState, setPageState] = React.useState({
        numItems: 6,
        selectedCategory: CATEGORIAS[0],
    });

    const handleSelectCategoryChange = (e) => {
        setPageState((prev) => ({
            ...prev,
            selectedCategory: e.target.value
        }))
    }

    const handleCategoryChange = (value) => {
        return () => {
            setPageState((prev) => ({
                ...prev,
                selectedCategory: value
            }))
        }
    }


    
    const getMoreDestinos = () => {

        setPageState((prev) => ({
            ...prev,
            numItems: prev.numItems + 6
        }))
    }



    React.useEffect(() => {
        setDestinos((prev) => ({
            ...prev,
            loading: true,
        }));
        //Simulates a request to the server to get more destinations
        const timeoutCode = setTimeout(() => (
            setDestinos((prev) => ({
                ...prev,
                loading: false,
                data: getCountriesOf(DESTINOS, pageState.selectedCategory, pageState.page, pageState.numItems)
            }))
        ), 500)

        return () => {
            clearTimeout(timeoutCode)
        }
    }, [pageState])

    return (
        <Container maxWidth='md'>
            <Box pb={4} textAlign={'center'}>
                <Hidden xsDown>
                    <Box mx='auto' display={'flex'} maxWidth={450} justifyContent={'space-between'}>
                        {
                            CATEGORIAS.map((categoria, index) => (
                                <CategoryItem onClick={handleCategoryChange(categoria)} key={index} selected={pageState.selectedCategory === categoria}>{categoria}</CategoryItem>
                            ))
                        }
                    </Box>
                </Hidden>

                <Hidden smUp>
                    {/*Appears on small screens when there is no more room for side-by-side categories*/}
                    <Select items={CATEGORIAS} onChange={handleCategoryChange} handleSelectChange={handleSelectCategoryChange} value={pageState.selectedCategory} />
                </Hidden>

                <Box py={5}>
                    <Destinos destinos={destinos.data}/>
                </Box>
                <Box width={'100%'} m={4} maxWidth={230} mx='auto'>
                    {/*load more destinations*/}
                    <LoadableButton loading={destinos.loading} disabled={destinos?.length >= DESTINOS.length} onClick={getMoreDestinos} variant='contained' color='primary' fullWidth>Ver Mais</LoadableButton>
                </Box>
            </Box>
        </Container>

    )
}
