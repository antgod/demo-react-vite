import React from 'react';
// https://styled-components.com/
import styled from 'styled-components';
// https://vitejs.cn/guide/features.html#postcss
import styles from './index.module.less';

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
)

const CssModule = () => {
  return (<button className={styles.button}>
    CSS Modules
  </button>);
}

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.p`
  color: green;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  text-align: center;
  background: papayawhip;
`;

// 替换组件库模板
const Render = props => {
  return (
    <Wrapper>
      <Title>
        Styled Components
      </Title>
      <CssModule />
      <JsxStyle />
    </Wrapper>
  );
};

export default Render;
