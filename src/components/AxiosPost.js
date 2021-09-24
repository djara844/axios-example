import {useState, useEffect} from "react";
import axios from "axios";

const urlBase = "https://jsonplaceholder.typicode.com/posts";

const AxiosPost = () => {

    const [post, setpost] = useState(null);

    useEffect(() => {
        axios.get(`${urlBase}/1`).then((response) => {
            setpost(response.data);
        })
    }, []);

    const createPost = () => {
        axios.post(urlBase,{
            title: "Hola mundo",
            body: "Ejemplo de post creado"
        })
        .then((response) => {
            setpost(response.data);
        })
    }

    if (!post) return "No post!"

    return(
        <div>
            <hr />
            <h1>Axios post</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={createPost}>Crear post</button>
            <hr />
        </div>
    )

}
export default AxiosPost;