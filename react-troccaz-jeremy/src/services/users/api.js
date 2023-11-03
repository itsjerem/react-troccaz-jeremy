
export const fetchUsers = () => fetch("https://dummyjson.com/users")
.then((result) => result.json());
