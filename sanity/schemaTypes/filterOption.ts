import { defineType, defineField } from "sanity";

export const filterOption = defineType({
  name: "filterOption",
  title: "Filter Option",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
    }),
  ],
});
