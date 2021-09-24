import {useState, useEffect} from "react";
import axios from "axios";

const urlBase = "https://jsonplaceholder.typicode.com/posts";

const AxiosDelete = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${urlBase}/1`).then((response) => {
        setPost(response.data);
    });
  }, []);

    const deletePost = () => {
        axios
        .delete(`${urlBase}/1`)
            .then(() => {
                alert("post eliminado!");
                setPost(null);
        });
    }

  if (!post) return "No post!"
    return (
        <div>
            <hr />
            <h1>Post delete</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={deletePost}>Elimnar Post</button>
            <hr />
        </div>
    )
}
export default AxiosDelete;