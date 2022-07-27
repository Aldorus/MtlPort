import React from 'react';
import { Outlet } from 'react-router-dom';
import './_Navigation.scss';

import { BEMClassName } from '@mtlport/react-lib';

export type NavigationProps = React.HTMLAttributes<HTMLElement>;
export const Navigation: React.FC<NavigationProps> = ({ ...props }) => {
  const namespace = BEMClassName(Navigation, props.className);
  return (
    <div
      data-testid={Navigation.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <div className={namespace.elementNames('links')}>Link 1</div>
      <Outlet />
    </div>
  );
};

Navigation.displayName = 'Navigation';
