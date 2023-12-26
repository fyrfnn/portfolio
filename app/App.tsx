import React, { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

function App(): JSX.Element {
    return (
        <StrictMode>
            <Suspense fallback={null}>
                <div>Hello, World!</div>
            </Suspense>
        </StrictMode>
    );
}

createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);
