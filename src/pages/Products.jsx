import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import SliderImages from '../components/SliderImages';

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const navigate = useNavigate(); // Use useNavigate

  React.useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data.slice(0, 6));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    // Your logic to add product to the cart
    console.log('Added to cart:', product);
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <div className='container'>
      <div className='main'>
      <SliderImages />
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;