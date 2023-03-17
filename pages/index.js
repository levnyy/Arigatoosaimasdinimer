import PostsAPI from '@/lib/api/Posts'
import Post from '@/lib/api/Posts'
import Link from 'next/link'

export default function IndexPage({posts}) {
  return (
    <div>
        <h1>Posts</h1>
        {
          posts && posts.map((post) => {
            return (
            <div key={`post-${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <Link href={`/posts/${post.id}`}>Read more</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const posts = await PostsAPI.readAll()
  return {
    props: {posts}, revalidate: 1
  }
}