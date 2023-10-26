import { Suspense, lazy } from 'react';
import LoadingScreen from './components/LoadingScreen';
import type { RouteObject } from 'react-router';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
    (
        <Suspense fallback={<LoadingScreen />}>
            <Component {...props} />
        </Suspense>
    );

// HOME PAGE
const Home = Loadable(lazy(() => import('./pages/Home')));

// ABOUT PAGE
const About = Loadable(lazy(() => import('./pages/About')));

// CONTACT PAGE
const Contact = Loadable(lazy(() => import('./pages/Contact')));

// SURVEY PAGE
const Survey = Loadable(lazy(() => import('./pages/Survey')));

// RESULTS PAGE
const Results = Loadable(lazy(() => import('./pages/Results')));

// routes
const routes: RouteObject[] = [
    {
        path: '*',
        element: <Home />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'contact',
        element: <Contact />,
    },
    {
        path: 'survey',
        element: <Survey />,
    },
    {
        path: 'results',
        element: <Results />,
    },
];

export default routes;

