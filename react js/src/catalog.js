import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';

const Catalog = () => {
  const { category } = useParams();

  // Mapeo de categorías a productos
  const categoryMap = {
    Heladeras: [
      { id: 1, name: 'Heladera Samsung', price: 899.999 },
      { id: 2, name: 'Heladera Drean', price: 109.999 },
    ],
    Lavarropas: [
      { id: 3, name: 'Lavarropas Samsung', price: 599.999 },
      { id: 4, name: 'Lavarropas Drean', price: 749.999 },
    ],
    Microondas: [
      { id: 5, name: 'Microondas Samsung', price: 129.999 },
      { id: 6, name: 'Microondas BGH', price: 149.999 },
    ],
  };

  const products = category ? categoryMap[category] : [];

  return (
    <div>
      <h2>Catálogo de Productos {category ? `- Categoría: ${category}` : ''}</h2>
      <ItemListContainer products={products} />
    </div>
  );
};

export default Catalog;
