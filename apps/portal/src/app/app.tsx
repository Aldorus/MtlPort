import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BEMClassName } from '@mtlport/react-lib';
import { Dashboard } from '../pages/Dashboard.page';
import { Navigation } from '../components/Navigation';
import './app.module.scss';

export type AppProps = React.HTMLAttributes<HTMLElement>;
export const App: React.FC<AppProps> = ({ ...props }) => {
  const namespace = BEMClassName(App, props.className);
  return (
    <div
      data-testid={App.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

App.displayName = 'App';
export default App;
