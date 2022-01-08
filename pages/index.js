
import Head from 'next/head'
import Box from '@material-ui/core/Box'
import Footer from '../src/components/Footer/index.js';
import Banner from '../src/components/home/Banner/index.js';
import ReserveOnlineSection from '../src/components/home/ReserveOnlineSection/index.js';
import SelectCountrySection from '../src/components/home/SelectCountrySection/index.js';
import DESTINOS from '../src/consts/destinos.js';


export default function Home({ destinos }) {


  return (
    <>
      <Head>
        <title>Agência Zyba</title>
        <meta property="og:title" />
        <meta name="description" content={`Um teste para a Agência Zyba`} />
        <meta property="og:type" content="website" />
      </Head>


      {/* Contains the menu and banner components */}
      <Banner />

      <main>
        <Box mb={8} mt={4}>
          {/* The first section below the banner. Contains the "Find your guide..." */}
          <ReserveOnlineSection />
        </Box>


        {/*Here it presents destinations*/}
        <SelectCountrySection initialData={destinos} />
      </main>


      {/*Displays Footer information*/}
      <Footer />
    </>
  )

}

export async function getStaticProps(context) {
  // Simulates a destination search by the api
  return {
    props: {
      destinos: DESTINOS.slice(0, 6),
    },
  }
}