import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { StarIcon } from "lucide-react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";
import ProductSideMenu from "./ProductSideMenu";
import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

const ProductCard = ({ product }: { product: Product }) => {
  console.log(product?.images);
  const isOutOfStock = product?.stock === 0;
  const hasDiscount = product?.discount && product.discount > 0;
  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden bg-linear-to-br from-gray-50 to-gray-100">
        {product?.images && (
          <Link
            href={`/product/${product?.slug?.current}`}
            className="block h-full"
          >
            <Image
              src={urlFor(product?.images[0]).url()}
              width={100}
              height={100}
              alt="productImage"
              className={`w-full h-96  object-contain group-hover:scale-110 hoverEffect rounded-md 
                `}
            />
          </Link>
        )}
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5 z-10">
          {isOutOfStock ? (
            <Badge className="bg-red-500 text-white text-[10px] px-2 py-0.5 shadow-md">
              Out of Stock
            </Badge>
          ) : (
            <>
              {product?.status === "sale" && (
                <Badge className="bg-gofarm-orange text-white text-[10px] px-2 py-0.5 shadow-md">
                  Sale
                </Badge>
              )}
              {product?.status === "new" && (
                <Badge className="bg-gofarm-green text-white text-[10px] px-2 py-0.5 shadow-md">
                  New
                </Badge>
              )}
              {product?.status === "hot" && (
                <Badge className="bg-red-500 text-white text-[10px] px-2 py-0.5 shadow-md">
                  Hot
                </Badge>
              )}
              {hasDiscount && (
                <Badge className="bg-red-500 text-white text-[10px] px-2 py-0.5 shadow-md font-bold">
                  -{product.discount}%
                </Badge>
              )}
            </>
          )}
        </div>
        {/* Prouct Side Menu */}
        <ProductSideMenu product={product} />
      </div>
      {/* Content Container */}
      <div className="p-3 space-y-2">
        <Link href={`/prodcut/${product?.slug?.current}`}>
          {/* <Title className="text-sm font-semibold line-clamp-1 mb-1 group-hover:text-gofarm-green transition-colors leading-tight"> */}
          {product?.name}
          {/* </Title> */}
        </Link>
        {/* Rating - Compact */}

        {/* Stock Status - Only show urgency */}
        {!isOutOfStock && (product?.stock as number) <= 10 && (
          <p className="text-[10px] text-gofarm-orange font-medium">
            Only {product?.stock} left
          </p>
        )}
        {/* Price */}
        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-base font-bold"
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
