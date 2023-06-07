// React
import { useEffect, useState } from 'react';
// Components
import { LoadingPage } from '@/components/ui';
// Layouts
import { MainLayout } from '@/components/layouts';


export default function Home() {
  const [ isLoading, setIsLoading ] = useState( true );

  useEffect( () => {
    loading();
  }, [] );

  const loading = () => {
    setTimeout( () => {
      setIsLoading( false )
    }, 1000 )
  }

  return (
    <MainLayout
      titlePage='Inicio'
    >
    {
      isLoading
      ? (  
      <LoadingPage />
      ): (
        <div className='py-3'>
          <h1>jsakdfjalsdfj</h1>
        </div>
      )
    }
    </MainLayout>
  );
}
