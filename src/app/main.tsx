import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { USE_MSW } from '@shared/constants';
import { App } from './App';

console.log(USE_MSW);

if (USE_MSW) {
  import('@/shared/api/msw')
    .then(({ worker }) => worker.start())
    .then(() => {
      createRoot(document.getElementById('root')!).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    });
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
