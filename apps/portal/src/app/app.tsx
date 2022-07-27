import * as React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './app.module.scss';
import { Welcome } from '../pages/Welcome';
import { Menu } from 'antd';
import { Button } from '@mtlport/design-system';

const Admin = React.lazy(() => import('admin/Module'));

const TowerControl = React.lazy(() => import('tower-control/Module'));

const items = [
  { label: 'Home', key: '/' },
  { label: 'Admin', key: '/admin' },
  {
    label: 'Tower Control',
    key: '/tower-control',
  },
];

export function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const handleMenuChange = (item) => {
    navigate(item.key);
  };
  return (
    <React.Suspense fallback={null}>
      <Menu items={items} mode="horizontal" onClick={handleMenuChange} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/tower-control/*" element={<TowerControl />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
