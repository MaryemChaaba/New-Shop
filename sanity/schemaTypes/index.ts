import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./categoryType";
import { blockContentType } from "./blockContentType";
import { productType } from "./productType";
import { orderType } from "./orderType";
import { brandType } from "./brandTypes";
import { blogType } from "./blogType";
import { blogCategoryType } from "./blogCategoryType";
import { authorType } from "./authorType";
import { addressType } from "./addressType";
import { subCategory } from "./subCategry";
import { filterOption } from "./filterOption";
import { filterType } from "./filterType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    subCategory,
    productType,
    brandType,
    filterType,
    filterOption,
    orderType
  ],
};