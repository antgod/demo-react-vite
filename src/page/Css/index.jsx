import React from 'react';
import { Page } from '@alife/sail';
import Layout from './layout';
import request from './request';
import './index.less';

const Test = () => {
  return (
    <Page request={request}>
      <Layout />
    </Page>
  );
};
export default Test;
