import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';
import './_Welcome.scss';

export type WelcomeProps = React.HTMLProps<HTMLDivElement>;
export const Welcome: React.FC<WelcomeProps> = ({ ...props }) => {
  const namespace = BEMClassName(Welcome, props.className);
  return (
    <article
      data-testid={Welcome.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      Welcome to the Montreal port
    </article>
  );
};
Welcome.displayName = 'Welcome';
