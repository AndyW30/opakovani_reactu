import React, { useEffect, useState } from 'react';
import './index.css';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://apps.kodim.cz/react-2/xxxmuck/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Chyba při načítání dat z API', error));
  }, []);
  return (
    <div className="productList">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
};
