import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import TowerControlApp from './app/TowerControlApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <TowerControlApp />
  </StrictMode>
);
