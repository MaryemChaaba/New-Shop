import { defineType, defineField } from "sanity";

export const subCategory = defineType({
  name: "subCategory",
  title: "Sub Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Subcategory Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "parentCategory",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "filters",
      title: "Filter Types (optional)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "filterType" }] }],
      description: "Override or extend parent category filters",
    }),
  ],
});
