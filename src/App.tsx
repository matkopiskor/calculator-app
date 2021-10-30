import { FC } from 'react';
import { Calculator } from './components/Calculator/Calculator';

export const App: FC = () => {
    return (
        <>
            <header>
                <h1>Calculator App</h1>
            </header>
            <main>
                <Calculator />
            </main>
            <footer>
                <span>Made by: Matko Piškor</span>
            </footer>
        </>
    );
};
