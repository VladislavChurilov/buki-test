import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import Conteiner from './components/Conteiner';
import Header from './components/Header';
import Chat from './components/Chat';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';

import { fetchMessages } from './redux/operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Suspense fallback={<h1>Load...</h1>}>
        <Chat />
      </Suspense>
      <Footer />
    </Container>
  );
}
