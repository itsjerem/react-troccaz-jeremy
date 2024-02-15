import { useContext } from "react";
import UserContext from "../UserContext";
import CheeseContext from "../screens/CheeseContext";

const Item = ({ cheese }) => {
  const { user } = useContext(UserContext);
  const { isSelected } = useContext(CheeseContext);

  if (cheese.isAdmin && !user?.isAdmin) {
    return <div>pas admin</div>;
  }
  return (
    <div style={{ border: isSelected ? "2px solid red" : "none" }}>
      <h2>{cheese.name}</h2>
      <img style={{ width: 200 }} src={cheese.photo} alt={cheese.name} />
    </div>
  );
};

export default Item;
