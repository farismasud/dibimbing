import PropTypes from 'prop-types';

const Card = props => {
    const { product } = props;
    return (
      <div key={product.id} className="w-[310px]">
        <div className="w-[310px]">
          <img className="w-full" src={product.image} alt={product.name} />
        </div>
        <div className="flex justify-between py-2">
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
        <div className="flex justify-between">
          <p>{product.description}</p>
          <p>{product.colors.length}</p>
        </div>
      </div>
    );
  };

  Card.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };
  
  export default Card;