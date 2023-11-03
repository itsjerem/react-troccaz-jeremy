import { useEffect, useState } from "react";
import { createFakeUsers } from "../services/createFakeUsers";
import { createFakePosts } from "../services/createFakePosts";
import { fetchUsers } from "../services/users/api";
import { transformUser } from "../services/users/utlis";
import { transformPost } from "../services/posts/utils";
import { fetchPosts } from "../services/posts/api";


export const usePosts = () => {  
    const [users, setUsers] = useState([]) 
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
          const result = await fetchUsers();
          const transformed = result.users.map(transformUser);
          const resultPost = await fetchPosts();
          const transformedPost = resultPost.users.map(transformPost);
          setUsers(transformed);
          setPosts(transformedPost);
          setLoading(false);
      })();
    }, []);

      const deletePost = (id) => {
        const nextPosts = posts.filter(post => post.id !== id);
        setPosts(nextPosts);
      }
      
    return { users, loading, posts, deletePost};
}