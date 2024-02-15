import ItemList from "./ItemList";

const ItemScreen = (cheeses) => {
  return (
    <div>
      <h1>Cheese</h1>
      <ItemList cheese={cheeses} />
    </div>
  );
};

export default ItemScreen;
