import React from 'react'
import CategoryProduct from './CategoryProduct';
import { useParams } from 'react-router-dom';
import { getProducts } from './fetcher';
const Category = ({ id, title, onClickCategory }) => {
  const [products, setProduct] = React.useState({ errorMessage: "", data: [] });
  const { categoryId } = useParams();
  
  React.useEffect(() => {
    const fetchData = async () => {
      const responseObject = await getProducts(categoryId);
      setProduct(responseObject);
    };
    fetchData();
  }, [categoryId]);

  const Renderproducts = () => {
    return products.data.map((p) => (
      <CategoryProduct key={p.id} {...p} >{p.title}</CategoryProduct>
    ));
  };

  return (
    <div>
      { products.data && Renderproducts() }
      { products.errorMessage && <div>Error: {products.errorMessage} </div>}
      
    </div>
  );
};

export default Category