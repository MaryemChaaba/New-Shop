import React from "react";
import AddToCartButton from "./AddToCartButton";
import Link from "next/link";
import ProductPrice from "./ProductPrice";
import { FaStar, FaHeart, FaEye } from "react-icons/fa";
import { Product } from "@/sanity.types";

interface Props {
  product: Product;
  view?: "grid" | "list";
}

const EnhancedProductCard = ({ product, view = "grid" }: Props) => {
  const regularPrice = product?.price;
  const discountedPrice = 10;

  if (view === "list") {
    return (
      <div className="bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden group">
        <div className="flex">
          {/* Image Section */}
          <div className="w-48 h-48 flex-shrink-0 relative group/image">
            <Link
              href={{
                pathname: `/products/${product?._id}`,
                query: { id: product?._id },
              }}
            >
              {/* <img
                src={product?.images[0]}
                alt={product?.title}
                className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-300"
              /> */}
            </Link>

            {product?.stock === 0 && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-sm">
                  OUT OF STOCK
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover/image:opacity-100 transition-opacity">
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-red-50 hover:text-red-500">
                <FaHeart className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-blue-50 hover:text-blue-500">
                <FaEye className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6">
            <div className="flex justify-between h-full">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {product?.category?._type}
                  </p>
                  {product?.brand && (
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">
                      {product.brand._type}
                    </span>
                  )}
                </div>

                <Link
                  href={{
                    pathname: `/products/${product?._id}`,
                    query: { id: product?._id },
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                    {product?.name}
                  </h3>
                </Link>

                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {product?.description}
                </p>

                <div className="flex items-center gap-3 mb-4"></div>

                <ProductPrice
                  regularPrice={regularPrice}
                  discountedPrice={discountedPrice}
                  product={product}
                />
              </div>

              <div className="flex flex-col justify-between items-end ml-6 min-w-[140px]">
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Availability</p>
                  <div className="flex items-center gap-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="bg-white border border-gray-200 rounded-xl hover:shadow-xl hover:shadow-black/10 transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Link
          href={{
            pathname: `/products/${product?._id}`,
            query: { id: product?._id },
          }}
        >
          {/* <img
            src={product?.images[0]}
            alt={product?.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          /> */}
        </Link>

        {product?.stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
              OUT OF STOCK
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transform hover:scale-110 transition-all duration-200">
            <FaHeart className="w-4 h-4" />
          </button>
          <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-blue-50 hover:text-blue-500 transform hover:scale-110 transition-all duration-200">
            <FaEye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
            {product?.category?._type}
          </p>
          {product?.brand && (
            <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">
              {product.brand._ref}
            </span>
          )}
        </div>

        <Link
          href={{
            pathname: `/products/${product?._id}`,
            query: { id: product?._id },
          }}
        >
          <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors truncate mb-3 leading-tight text-sm">
            {product?.name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default EnhancedProductCard;
