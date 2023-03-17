import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import styles from './PostForm.module.css';
import PostsAPI from '@/lib/api/Posts';
import posts from '@/lib/api/Posts';
import { RouteHandlerManager } from 'next/dist/server/future/route-handler-managers/route-handler-manager';

const defaultPost = {
    title: "",
    text: ""
}
export default function PostForm({postToEdit = null}) {
    const [isLoading, setIsLoading] = useState(false);
    const [post, setPost] = useState(defaultPost)
    const router = useRouter();

    useEffect(() => {
        if (postToEdit == null) {
            setPost(defaultPost)
        }
    }, [postToEdit])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
          ...post,
            ...{[name]: value}
        })
    }
    const handleSubmit = async (e) => { 
        console.log(post)
        e.preventDefault()
        if (post.id){
            post.updatedAt = new Date().toISOString();
            const updatedPost = await PostsAPI.update(post)
            setPost(updatedPost)
            router.push(`/posts/${post.id}`)
        } else {
            post.createdAt = new Date().toISOString();
            post.updatedAt = new Date().toISOString();
            const newPost = await PostsAPI.create(post)
            router.push(`/posts/${newPost.id}`)
        } 
        
    }

return (
    <div className={styles['form-container-styling']}>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <div>
                    <input onChange={handleChange} value={posts.title} type="text" name="title" id="title" placeholder="Title" />
                </div>
            </div>
            <div>
                <label htmlFor="text">Text</label>
                <div>
                    <textarea onChange={handleChange} value={posts.text} type="text" name="text" id="text" placeholder="Text" rows="10"/>
                </div>
            </div>
            <button className={"button"} disabled={isLoading}>
                {isLoading? "Loading..." : "Submit"}
            </button>
        </form>
    </div>
    )
}