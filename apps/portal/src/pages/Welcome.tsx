import React from 'react';
import { BEMClassName } from '@mtlport/react-lib';

export type WelcomeProps = React.HTMLProps<HTMLDivElement>;
export const Welcome: React.FC<WelcomeProps> = ({ ...props }) => {
  const namespace = BEMClassName(Welcome, props.className);
  return (
    <article
      data-testid={Welcome.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      Hello
    </article>
  );
};
Welcome.displayName = 'Welcome';
