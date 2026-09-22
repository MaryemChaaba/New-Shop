import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const brandType = defineType({
  name: "brand",
  title: "Brand",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
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
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "image",
    },
  },
});
