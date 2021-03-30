import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { css, Global } from '@emotion/react';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Global
      styles={css`
        html,
        body {
          padding: 3rem 1rem;
          margin: 0;
          background: papayawhip;
          min-height: 100%;
          font-family: Helvetica, Arial, sans-serif;
          font-size: 24px;
        }
      `}
    />
    <Component {...pageProps} />
  </>
);

export default App;
