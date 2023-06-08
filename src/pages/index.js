// React
import { useEffect, useState } from 'react';
// Components
import { CardGrid1, CardGrid2, LoadingPage } from '@/components/ui';
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
          <CardGrid1 />
          <CardGrid2 />
        </div>
      )
    }
    </MainLayout>
  );
}
