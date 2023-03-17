import PostsAPI from '@/lib/api/Posts'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PostForm from  '../../../components/PostForm'
export default function editPost() {
    const [post, setPost] = useState(null)
    const router = useRouter();
    const urlID = router.query.id;

    useEffect (() => {
        let isMounted = true;
        if (!router.isReady) return
        const loadPost = async () => {
            const post = PostsAPI.read(urlID)
            if (!isMounted){
            setPost(post)
            }
        }
        loadPost()

        return() => isMounted = false;

    },[router])



    return (
        <div>
            <h1>Edit Post</h1>
            <PostForm postToEdit={post}/>
        </div>
    )
}