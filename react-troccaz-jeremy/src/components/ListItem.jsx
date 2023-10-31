import styled from "@emotion/styled";
import Avatar from "./Avatar";
const ListItem = ({ name, avatar, onClick }) =>
{
    return (
    <ItemContainer onClick={onClick}>
        <Avatar src={avatar} />
        <Span>
            {name}
        </Span>
    </ItemContainer>
)}

const ItemContainer = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
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
export default ListItem;