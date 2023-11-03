import { useEffect, useState } from "react";
import { fetchUsers } from "../services/users/api";
import { transformUser } from "../services/users/utlis";



export const useUsers = () => {  
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //methode 1
        // const handleFetchUsers = async () => {
        //   const result = await handleFetchUsers();
        //   const transformed = result.users.map(transformUser);
        //   setUserts(transformed);
        //   setLoading(false);

        //methode 2
        // fetchUsers().then(result => {
        //   const transformed = result.users.map(transformUser);
        //   setUserts(transformed);
        //   setLoading(false);
        // })
        //methode 3
        (async () => {
            const result = await fetchUsers();
            const transformed = result.users.map(transformUser);
            setUsers(transformed);
            setLoading(false);
        })();
    }, []);

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
      }
    return { users, loading, setUsers, deleteUser};
}