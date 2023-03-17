import { useState, useEffect } from "react"

const URL = "https://jsonplaceholder.typicode.com/posts"
export default function Posts() {
    const [posts, setPosts] = useState([])
    const [postMessage, setPostMessage] = useState([])

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(URL)
            const responseJSON = await response.json()
            setPosts(responseJSON)
        }
        if(!loadData()) console.log("error")
    }, [])

    return (
        <div>
            <h1>Posts</h1>
            {
            postMessage.map(post => {
                return (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <link href={`/posts/${post.id}/comments`}></link>
                </div>
                )
                })
            }
            </div>
        )
    }