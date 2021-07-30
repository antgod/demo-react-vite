import React from 'react';
import { Page } from '@alife/sail/src/index';
import Layout from './layout';
import request from './request';

const Test1 = () => {
  return (
    <Page request={request}>
      <Layout />
    </Page>
  );
};
export default Test1;
