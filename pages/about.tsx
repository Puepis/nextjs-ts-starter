import Link from 'next/link';
import Layout from '../src/components/Layout';
import Counter from '../src/components/Counter';
import { FC } from 'react';

type Empty = Record<string, never>;

const AboutPage: FC<Empty> = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <Counter />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
