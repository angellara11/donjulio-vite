import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../asyncMock";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="text-center">
      <div className="text-center">Item Detail</div>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-sm">ID: {product.id}</p>
      <p className="text-sm">Category: {product.category}</p>
      <p className="text-sm">Price: ${product.price}</p>
    </div>
  );
};
