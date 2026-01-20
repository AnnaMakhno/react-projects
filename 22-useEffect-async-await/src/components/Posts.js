import { useEffect, useState } from "react";
import Post from "./Post";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
    const [postsArr, setPostsArr] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(API_URL);
                const posts = await res.json();
                setPostsArr(posts);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
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
