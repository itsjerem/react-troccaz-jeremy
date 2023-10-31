import { useState, useEffect, useMemo } from 'react'
import styled from '@emotion/styled'
import '../App.css'
import Counter from '../components/counter'
import { CreateButton } from '../components/Button'
import { createFakeUsers } from '../services/createFakeUsers'
import ListItem from '../components/ListItem'
import ListContainer from '../components/ListContainer'
import { TextField } from '../components/Textfield'

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const users = createFakeUsers(10);
      setUsers(users);
      setLoading(false);
    }, 750);
  }, []);

  const createUser = () => {
    // setUsers([...createFakeUsers(1), ...users]);
    setUsers((users) => [...createFakeUsers(1), ...users])
  }

  const deleteUser = (id) => {
    console.log('id :>> ', id);
    setUsers(users.filter((user) => user.id !== id));
  }

  const filtered = useMemo(() => { 
      if(!search) return users;
      return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    } , [search, users])


  if (loading) return <div>Loading...</div>;


  return (
    <>
      <div className="card">
      <TextField placeholder="Rechercher..." onChange={(event) => setSearch(event.target.value)} />
        <CreateButton width="16" height="3" onClick={createUser}>
          Créer un utilisateur
        </CreateButton>
        <ListContainer>
          {filtered.map((user) => (
            <ListItem
              key={user.id}
              name={user.name}
              onClick={() => deleteUser(user.id)}
            />
          ))}
        </ListContainer>
      </div>
    </>
  );
}

export default App
