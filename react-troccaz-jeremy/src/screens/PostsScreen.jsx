import { useState, useEffect, useMemo } from 'react'
import styled from '@emotion/styled'
import '../App.css'
import Counter from '../components/counter'
import { CreateButton } from '../components/Button'
import { createFakeUsers } from '../services/createFakeUsers'
import ListItem from '../components/ListItem'
import ListContainer from '../components/ListContainer'
import { TextField } from '../components/Textfield'
import Post from '../components/Posts'
import { createFakePosts } from '../services/createFakePosts'


function App() {
  const [users, setUsers] = useState([]) 
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")


  useEffect(() => {
    setTimeout(() => {
      const nextUsers = createFakeUsers(10);
      const nextPosts = createFakePosts(10);
      setUsers(nextUsers);
      setLoading(false);
    }, 750)
  }, []);

const createPost = () => {
  const nextPosts = createFakePosts(1);
  setPosts([ ...nextPosts, ...posts]);
  console.log("createPost");
}

const deletePost = (id) => {
  const nextPosts = posts.filter(post => post.id !== id);
  setPosts(nextPosts);
}



const filtered = useMemo(() => {
  if (!search) return posts;
    return posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
}, [search, posts]);


  if (loading) return <div>Loading...</div>;

  return (
    <>
    <TextField placeholder="Rechercher..." onChange={(event) => setSearch(event.target.value)} />
    <CreateButton onClick={createPost}>
      Créer un post

    </CreateButton>
    <ListContainer>
      {filtered.map((post) => ( 
          <Post
            key={post.id}
            title={post.title}
            user={post.user}
            description={post.description}
            photo={post.photo}
            onClick={() => deletePost(post.id)}
          />
        ))}
    </ListContainer>
    
     
      
   
    </>
  )
}


export default App