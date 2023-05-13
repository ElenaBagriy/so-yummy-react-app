import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'reusableComponents/Loader/Loader';
import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';

function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default SharedLayout;
