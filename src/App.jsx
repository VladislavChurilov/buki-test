import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Footer from './components/Footer';

import { fetchMessages } from './redux/operations';

const Header = lazy(() =>
  import('./components/Header' /* webpackChunkName: "Header" */),
);
const Chat = lazy(() =>
  import('./components/Chat' /* webpackChunkName: "Chat" */),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<CircularProgress />}>
        <Header />
        <Chat />
      </Suspense>
      <Footer />
    </Container>
  );
}
