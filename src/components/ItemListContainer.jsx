import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory } from "../asyncMock";
import Item from "./Item";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getCategory(id);
      setProductList(products);
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="text-center">
      <h2>Productos en: {id || "todas las categorías"}</h2>
      <ul className="flex flex-wrap justify-center">
        {productList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
