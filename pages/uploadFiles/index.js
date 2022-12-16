import Uppy from '@uppy/core';
import { useMemo } from 'react';
import { Dashboard } from '@uppy/react';
import Header from '../../components/header/header';

export default function MyComponent() {
  const uppy = useMemo(() => {
    return new Uppy();
  }, []);

  return (
    <>
      <Header />
      <div className='container d-flex flex-row justify-content-center mt-4'>
        <Dashboard uppy={uppy} width='60vw' height='80vh' />
      </div>
    </>
  );
}
