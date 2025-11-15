import { createRoot } from 'react-dom/client';
// import Sample from './components/Sample';
import MainPage from './pages/MainPage';

const App = () => {
    return (
        <>
            <MainPage/>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);