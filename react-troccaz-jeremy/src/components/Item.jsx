const Item = ({ cheese }) => {
  return (
    <div>
      <h2>{cheese.name}</h2>
      <p>{cheese.photo}</p>
    </div>
  );
};

export default Item;
