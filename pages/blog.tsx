import client from "../apollo-client";
import Post from "../components/post";
import Layout from "../layout/layout";
import { IPost } from "../models/post.model";
import { getAllPosts } from "../models/queries";

interface IBlogProps {
  posts: IPost[]
}

export default function Blog({posts}: IBlogProps) {
  return (
    <>
      <Layout title="Blog" description="Blog musical">
        <main>
          <h1 className="heading"> Blog</h1>
          <div>
            {posts.map(post => <Post post={post} key={post.id} />)}
          </div>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps() {
  /* const response = await fetch(`${process.env.API_URL}/posts?populate=cover`);
  const { data: posts } = await response.json(); */
  const {data: {posts}} = await client.query({
    query: getAllPosts,
  });
  return {
    props: {
      posts: posts.data,
    },
  };
}
