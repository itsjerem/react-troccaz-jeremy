export const fetchPosts= () => fetch("https://dummyjson.com/users")
.then((result) => result.json());
