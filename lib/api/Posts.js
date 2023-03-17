import { getJSON, BASE_URL,putJSON,deleteJSON,postJSON } from "."

const URL = `${BASE_URL}/posts`

const PostsAPI = {
    readAll() {
        return getJSON(`${URL}?_sort=id&_order=desc`)
        
    },
    read(id) {
        return getJSON(`${URL}/${id}`)
    },
    create(post){
        return postJSON(URL, { body: post });
    },
    update(post){
        return putJSON(`${URL}/${post.id}`, { body: post })
    },
    delete(post){
        let data = null;
        try {
        data = deleteJSON(`${URL}/${post.id}`)
        } catch (error) {
            console.log("error while deleting post", error)
        }
        return data
    }
}

export default PostsAPI