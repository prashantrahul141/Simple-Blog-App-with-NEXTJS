import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import CopyFooter from '../../components/common/Footer';
import NavBar from '../../components/common/navbar';
import EachBlog from '../../components/blogs/eachblog';
import NoBlogsFound from '../../components/blogs/noblogsfound';
import blog_type from '../../types/blogs';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/blogs');
  const data = (await res.json()) as blog_type[];
  return {
    props: {
      data,
    },
  };
};

const Blogs = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <div>
        <Head>
          <title>Blogs | Latest Blogs</title>
          <meta name="description" content="My Blog App." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar></NavBar>
        {data.length > 0 ? (
          <EachBlog Data={data}></EachBlog>
        ) : (
          <NoBlogsFound></NoBlogsFound>
        )}
        <CopyFooter></CopyFooter>
      </div>
    </>
  );
};

export default Blogs;
