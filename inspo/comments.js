import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import link from "next/link";

export default function CommentsPage() {
    
    const router = useRouter();
    const {id} = router.query.id;

    const {comments, setComments} = useState([]);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch(`/api/comments/${id}`);
            const responseJSON = await response.json();
            setComments(responseJSON);
        }
        if(!loadData()) console.log("error");
    }, [id]);

    return(
        <div>
        <link href={"/posts"}></link>
        {
            comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h1>{comment.name}</h1>
                        <p>{comment.body}</p>
                        <p>{comment.emial}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
