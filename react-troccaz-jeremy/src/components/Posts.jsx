import styled from "@emotion/styled";
import Photo from "./Photo";
import ListItem from "./ListItem";

const Post = ({ title, description, photo, user, onClick }) =>
{
    return (
    <ItemContainer onClick={onClick}>
        <Span>
            {title}
        </Span>
        <ListItem name={user.name} avatar={user.avatar} />
        <div>
            {description}
        </div>
        <Photo src={photo} />
    </ItemContainer>
)}

const ItemContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
    background-color: #eee;
    flex-direction: column;
    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    transition: background 0.2s;
    &:hover {
        background-color: #eee;
        cursor: pointer;
    }
    `; 

const Span = styled.span`
    font-size: 1.5em;   
    `;

export default Post;