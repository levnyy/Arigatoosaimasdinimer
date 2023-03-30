import PostsAPI from "@/lib/api/Posts";
import Link from "next/link";
import styles from "./DetailPost.module.css";
import DeletePostButton from '../../store/index'

export default function DetailPost({ post }) {

    const handleDeletePost = (deletedPostId) => {
        setPosts(posts.filter((post) => post.id !== deletedPostId));
      };

    return !post ? null : (
        <div className={styles[`detail-container-styling`]}>
            <div>
                <h1>{post.title}</h1>
                <p>{post.text}</p>
                <p><i>Erstellt am {post.createdAt}</i></p>
            </div>

            <div className={post.Link}>
                <Link href={`/`}>Back</Link>
                <Link href={`/posts/edit/${post.id}`}>Edit</Link>
                <DeletePostButton postId={post.id} onDelete={handleDeletePost} />
            </div>
            
        </div>
    )
    }
    export async function getStaticProps(context) {
        const id = context.params.id;
        const post = await PostsAPI.read(id)
        return {
            props: {post}, revalidate: 10
    }
}

export async function getStaticPaths() {
    const Posts = await PostsAPI.readAll();
    const paths = Posts.map((posts) => (
        {
        params: { id: posts.id.toString() }
        }
        ))
        return {
            paths,
            fallback: true
        }
    }
