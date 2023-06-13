// React
import { useEffect, useState } from 'react';
// Next.js
import Head from 'next/head';
// Components
import { Footer, LoadingPage, NavBar } from '../ui';


export const MainLayout = ({
  children,
  titlePage = '',
  descPage = '',
  keywordsPage = ''
}) => {
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    loadingControl();
  }, [] );

  const loadingControl = () => {
    setTimeout( () => {
      setIsLoading( false );
    }, 1000 );
  }

  return (
    <>
      <Head>
        <title>{ titlePage }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={ descPage } />
        <meta name="keywords" content={ keywordsPage } />
        <meta name="robots" content="index" />
        <meta name="language" content="es" />

        <meta property="og:title" content={ titlePage } />
        <meta property="og:description" content={ descPage } />
        <meta property="og:image" content={ '' } />
        <meta property="og:url" content={ '' } />
      </Head>
      
      <NavBar />
      
      <main className='container mt-5'>
        {
          isLoading
            ? <LoadingPage />
            : <>{ children }</>
        }
      </main>

      <Footer />
    </>
  );
}
