"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Category,
  SubCategory,
  GET_ALL_CategoryANDSUBCATEGORYResult,
} from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import Link from "next/link";
import { getAllCategoryAndSubCategory } from "@/sanity/queries";
type CategoryItem = GET_ALL_CategoryANDSUBCATEGORYResult[number];

type subCatType = CategoryItem["subcategorieName"][number];

const CategoryMenu = ({
  categories,
}: {
  categories: GET_ALL_CategoryANDSUBCATEGORYResult;
}) => {
  console.log(categories);
  return (
    <div className="hidden md:flex  justify-center bg-shop_dark_green px-3 py-3">
      {categories?.map((category) => (
        <FlyoutLink
          key={category._id}
          href={`/category/${category?.slug?.current}`}
          FlyoutContent={PricingContent}
          subCategory={category.subcategorieName ?? []}
        >
          {category?.title}
        </FlyoutLink>
      ))}
    </div>
  );
};

const FlyoutLink = ({
  children,
  href,
  FlyoutContent,
  subCategory,
}: {
  children: React.ReactNode;
  href: string;
  FlyoutContent?: React.ElementType;
  subCategory: subCatType[];
}) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => {
        if (subCategory && subCategory.length > 0) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit px-2"
    >
      <Link href={href} className="relative text-white px-5">
        {children}
      </Link>
      <AnimatePresence>
        {showFlyout && subCategory.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-10 bg-white text-white"
          >
            <div className="absolute -top-10 left-0 right-0 h-6 bg-transparent" />
            <FlyoutContent subCategory={subCategory} parentLink={href} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({
  subCategory,
  parentLink,
}: {
  subCategory: subCatType[];
  parentLink: string;
}) => {
  return (
    <div className="w-52 bg-shop_dark_green p-6 shadow-xl">
      <div className="mb-3 space-y-2">
        {subCategory?.map((category) => (
          <Link
            href={`${parentLink}/${category?.slug?.current}`}
            className="block text-sm hover:underline"
          >
            {category?.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
