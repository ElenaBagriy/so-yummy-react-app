import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
