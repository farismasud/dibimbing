import PropTypes from 'prop-types';
import Card from "../Card";

const Products = ({ productList }) => {
    return (
        <div className="flex gap-8">
            {productList.map(product => (
                <Card key={product.id} product={product} />
))}
        </div>
    )
}

Products.propTypes = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        // Add other prop types as needed
    })).isRequired,
}

export default Products;