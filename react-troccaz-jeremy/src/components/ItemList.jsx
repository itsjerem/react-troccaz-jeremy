import Item from "./Item";

const ItemList = ({ cheeses }) => {
  return (
    <div>
      {cheeses.map((cheese, key) => (
        <Item cheese={cheese} key={key} />
      ))}
    </div>
  );
};

export default ItemList;
