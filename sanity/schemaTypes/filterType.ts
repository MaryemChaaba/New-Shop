import { defineType, defineField } from "sanity";

export const filterType = defineType({
  name: "filterType",
  title: "Filter Type",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Filter Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "options",
      title: "Options",
      type: "array",
      of: [{ type: "filterOption" }],
    }),
  ],
});
