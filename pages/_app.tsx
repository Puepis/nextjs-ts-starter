import { css, Global } from '@emotion/react';
import { SagaStore, wrapper } from '../src/redux/store';
import App, { AppInitialProps, AppContext } from 'next/app';
import { END } from 'redux-saga';

class WrappedApp extends App<AppInitialProps> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };

    // 2. Stop the saga if on server
    if (ctx.req) {
      ctx.store.dispatch(END);
      await (ctx.store as SagaStore).sagaTask.toPromise();
    }

    // 3. Return props
    return {
      pageProps,
    };
  };

  public render() {
    const { Component, pageProps } = this.props;
    return (
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
  }
}

export default wrapper.withRedux(WrappedApp);
