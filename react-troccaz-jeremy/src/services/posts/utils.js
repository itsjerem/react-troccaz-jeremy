export const transformPost = ({
    id,
    firstName,
    lastName,
    maidenName, 
    eyeColor,
    username,
    image
}) => ({
    id,
    title: maidenName,
    user: username,
    description: `${university} ${gender} ${eyeColor}`,
    photo: image,
});