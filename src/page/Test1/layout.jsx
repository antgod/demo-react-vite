import React, { useState } from 'react';
import { Flex, StoreView } from '@alife/sail/src/index';
import A from './modules/A';
import B from './modules/Css';

const isDevelopment = process.env.NODE_ENV === 'development';

const { Item } = Flex;

const DevUtil = ({ store }) => {
  const [visible, setVisible] = useState(false);

  const onShowDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onModify = () => {
    window.open(`http://localhost:3000`);
  };

  return (
    <StoreView
      width={520}
      title="数据源预览"
      icon="工具"
      externalName="修改"
      visible={visible}
      date={store}
      onShowDrawer={onShowDrawer}
      onClose={onClose}
      onModify={onModify}
    />
  );
};

export default ({ store }) => {
  return (
    <>
      <Flex fix>
        <Item flex="">
          <B />
        </Item>
      </Flex>
      <Flex fix>
        <Item flex="">
          <A />
        </Item>
      </Flex>
      {isDevelopment == true && <DevUtil store={store} />}
    </>
  );
};
