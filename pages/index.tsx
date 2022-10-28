import Head from 'next/head';
import NavBar from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="My Blog App." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
      <NavBar></NavBar>

      <footer></footer>
    </div>
  );
}