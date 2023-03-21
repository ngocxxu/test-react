import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router';
import './App.css';
import { LoadingPage } from './components/Loading';
import Home from './pages/HomeTemplate/Home';

const HomeLazy = lazy(() => import('./pages/HomeTemplate'));

function App() {
  const routes = [
    {
      element: (
        <Suspense fallback={<LoadingPage />}>
          <HomeLazy />
        </Suspense>
      ),
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
      ],
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export default App;
