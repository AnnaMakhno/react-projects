import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
    // https://jsonplaceholder.typicode.com/posts

    const [postsArr, setPostsArr] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPostsArr(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h2>Loading...</h2>
            ) : (
                postsArr.map((post) => {
                    return (
                        <Post
                            {...post}
                            key={post.id}
                        />
                    );
                })
            )}
        </>
    );
}

export default Posts;
