import { defineType, defineField } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
       defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "range",
      type: "number",
      description: "Starting from",
    }),
    defineField({
      name: "featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
 
    defineField({
      name: "subCategories",
      title: "Sub Categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "subCategory" }] }],
    }),
    defineField({
      name: "filters",
      title: "Filter Types",
      type: "array",
      of: [{ type: "reference", to: [{ type: "filterType" }] }],
      description: "Define filters that apply only to this category",
    }),
   ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});