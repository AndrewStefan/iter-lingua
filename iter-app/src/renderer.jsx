import { createRoot } from 'react-dom/client';
import Sample from './components/Sample';

const App = () => {
    return (
        <>
            <Sample/>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);