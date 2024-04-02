import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(response.data.slice(0, 6)); 
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  
  const getCategoryImage = (category) => {
    
    switch (category) {
      case 'electronics':
        return 'https://plus.unsplash.com/premium_photo-1681150012494-7030abadfd3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVsZWN0cm9uaWMlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D';
      case 'jewelery':
        return 'https://images.unsplash.com/flagged/photo-1570055349452-29232699cc63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8andlbGxlcnl8ZW58MHx8MHx8fDA%3D';
      case 'men clothing':
        return 'https://images.unsplash.com/photo-1632226390535-2f02c1a93541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbiUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D';
      case 'women clothing':
        return 'https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D';
      default:
        return 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVuJTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D';
    }
  };

  return (
    <div className='categories-image'>
      <h2>Categories</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <img src={getCategoryImage(category)} alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;