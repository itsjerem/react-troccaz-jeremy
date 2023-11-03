export const transformUser = ({
    id,
    firstName, 
    lastName, 
    image
}) => ({
    id,
    name: `${firstName} ${lastName}`,
    avatar: image,
});

// const nextUsers = users.map(transformUser);