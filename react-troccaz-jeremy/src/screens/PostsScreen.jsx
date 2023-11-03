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
import { usePosts } from '../hooks/usePosts'


function App() {

  const { users, loading, posts, deletePost } = usePosts();

  const [search, setSearch] = useState("")


const createPost = () => {
  const nextPosts = createFakePosts(1);
  setPosts([ ...nextPosts, ...posts]);
  console.log("createPost");
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