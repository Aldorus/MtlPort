import React from 'react';
import {BEMClassName} from '@mtlport/react-lib';
import './_Welcome.scss';
import {Button, Input} from "antd";
import {useAddNotificationMutation} from "@mtlport/schema";

export type WelcomeProps = React.HTMLProps<HTMLDivElement>;
export const Welcome: React.FC<WelcomeProps> = ({...props}) => {
  const namespace = BEMClassName(Welcome, props.className);
  const [content, setContent] = React.useState('');
  const [toto] = useAddNotificationMutation({
    variables: {
      content
    }
  })
  return (
    <article
      data-testid={Welcome.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <Input onChange={(event) => setContent(event.currentTarget.value)}/>
      <Button
        onClick={() => toto()}>Toto</Button><br/>
      Welcome to the Montreal port
    </article>
  );
};
Welcome.displayName = 'Welcome';
