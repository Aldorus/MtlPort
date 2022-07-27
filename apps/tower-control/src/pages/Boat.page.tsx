import React from 'react';
import { Divider, List, Typography } from 'antd';
import { BEMClassName } from '@mtlport/react-lib';
import { GetContainerDocument, useGetContainerQuery } from '@mtlport/schema';

export type BoatPageProps = React.HTMLProps<HTMLDivElement>;
export const BoatPagePage: React.FC<BoatPageProps> = ({ ...props }) => {
  const namespace = BEMClassName(BoatPagePage, props.className);
  const { data } = useGetContainerQuery();
  return (
    <article
      data-testid={BoatPagePage.displayName}
      {...props}
      className={namespace.blocksNames()}
    >
      <Typography.Title level={2}>BoatPage</Typography.Title>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data?.containers}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item.content}
          </List.Item>
        )}
      />
    </article>
  );
};
BoatPagePage.displayName = 'BoatPage';
