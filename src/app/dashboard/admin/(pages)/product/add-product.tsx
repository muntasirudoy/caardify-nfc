import { getCategoriesAction } from "../category/category.action";
import { CategoriesProvider } from "../category/category.provider";
import { AddProductButton } from "./product-add";
import { ProductsProvider } from "./product.provider";

interface AddProductProps {
  action: (data: any) => Promise<void>;
}

export const AddProduct = ({ action }: AddProductProps) => {
  return (
    <CategoriesProvider action={getCategoriesAction}>

      <ProductsProvider action={action}>
        <AddProductButton />
      </ProductsProvider>
    </CategoriesProvider>


  );
};
