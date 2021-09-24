import {useEffect, useState} from "react";
import axios from "axios";

const urlBase ="https://jsonplaceholder.typicode.com/posts/1";

const AxiosGet = () =>{

    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(urlBase).then((response) => {
            setPost(response.data);
        })
    }, []);


    if (!post) return null;
    return(
        <div>
            <hr/>
            <h1>Axios get</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
        </div>
    )
}

export default AxiosGet;