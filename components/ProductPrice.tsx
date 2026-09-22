"use client";
import { useEffect, useState } from "react";
import PriceFormat from "./PriceFormat";
import { Product } from "@/sanity.types";
import useStore, { CartItem } from "@/store";

const ProductPrice = ({ regularPrice, discountedPrice, product }: any) => {
  const [existingProduct, setExistingProduct] = useState<CartItem | null>(null);
  const { items: cart } = useStore();

  useEffect(() => {
    const availableProduct = cart?.find(
      (item) => item?.product._id === product?.id,
    );
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);
  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        className="font-semibold text-sky-color"
        amount={
          existingProduct
            ? discountedPrice * existingProduct?.quantity!
            : discountedPrice
        }
      />
      <PriceFormat
        className="text-gray-500 line-through font-normal"
        amount={
          existingProduct
            ? regularPrice * existingProduct?.quantity!
            : regularPrice
        }
      />
    </div>
  );
};

export default ProductPrice;
