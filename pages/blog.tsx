import Post from "../components/post";
import Layout from "../layout/layout";
import { IPost } from "../models/post.model";

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

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=cover`);
  const { data: posts } = await response.json();

  return {
    props: {
      posts,
    },
  };
}
