import { AddCategoryButton } from "./add.category.button";
import { getCategoriesAction } from "./category.action";
import { CategoriesProvider } from "./category.provider";


export const AddCategory = () => {
    return (
        <CategoriesProvider action={getCategoriesAction}>
            <AddCategoryButton />
        </CategoriesProvider>
    );
};
