import Link from 'next/link';
import Layout from '../src/components/Layout';
import { FC } from 'react';
import { END } from 'redux-saga';
import { SagaStore, wrapper } from '../src/redux/store';
import { loadData } from '../src/redux/modules/example/actions';
import Counter from '../src/components/Counter';

type Empty = Record<string, never>;

const IndexPage: FC<Empty> = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <Counter />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState().example.placeholderData) {
    store.dispatch(loadData());
    // end the saga
    store.dispatch(END);
  }
  await (store as SagaStore).sagaTask.toPromise();
});

export default IndexPage;
