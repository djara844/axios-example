import {useState, useEffect} from "react";
import axios from "axios";

const urlBase = "https://jsonplaceholder.typicode.com/posts";

const AxiosPut = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`${urlBase}/1`).then((response) => {
          setPost(response.data);
        });
    }, []);

    const updatePost = () => {
        axios.put(`${urlBase}/1`, {
            title: "Actualizado",
            body: "post actualizado"
        }).then((response) => {
            setPost(response.data);
        });
    }

    if (!post) return "No post!"
    
    return (
        <div>
            <hr />
            <h1>Axios put</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={updatePost}>Actualizar post</button>
            <hr />
        </div>
    )
}
export default AxiosPut;