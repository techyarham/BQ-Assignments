import "./ProductCard.css";

export const ProductCard = (props) => {
  const { name, price, quantity, category, description, image } =
    props.cardData;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <p className="card-desc">{description}</p>
      <p className="card-price">Price: {price}</p>
      <p className="card-category">Category: {category}</p>
      <p className="card-stock">In Stock: {quantity}</p>
    </div>
  );
};
