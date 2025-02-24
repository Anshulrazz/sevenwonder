'use client'
// pages/blog/[id].js
import { useRouter } from 'next/router';
import blogData from '../blogData.json';
import Image from 'next/image';

const BlogPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Image src={post.image} alt={post.title} width={600} height={400} />
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
