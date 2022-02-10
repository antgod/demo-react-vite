import React from 'react';
// https://styled-components.com/
import styled from 'styled-components';
// https://vitejs.cn/guide/features.html#postcss
import styles from './index.module.less';
// https://github.com/emotion-js/emotion
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  display: block;
  color: green;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

const CssModule = () => {
  return (<button className={styles.button}>
    CSS Modules
  </button>);
}

// https://github.com/vercel/styled-jsx
const JsxStyle = () => (
  <div>
    <p>JSX Style</p>
    <style jsx>{`
      p {
        color: blue;
      }
    `}</style>
  </div>
);

const Emotion = props => {
  return (
    <div
      css={css` color: red;`}
      {...props}
    />
  )
};

// 替换组件库模板
const Render = props => {
  return (
    <Wrapper>
      <Link href="https://styled-components.com/">
        Styled Components
      </Link>
      <CssModule />
      <JsxStyle />
      <Emotion>emotion</Emotion>
    </Wrapper>
  );
};

export default Render;
