import CategoryProducts from "@/components/CategoryProducts";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";
import React from "react";

const CategoryPage = async ({ params }: { params: { slug: string[] } }) => {
  const [categorySlug, subCatSlug] = params.slug;
  const categories = await getCategories();

  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {categorySlug && categorySlug} /subCategory:{" "}
            {subCatSlug && subCatSlug}
          </span>
        </Title>
        <CategoryProducts categories={categories} slug={categorySlug} />
      </Container>
    </div>
  );
};

export default CategoryPage;
