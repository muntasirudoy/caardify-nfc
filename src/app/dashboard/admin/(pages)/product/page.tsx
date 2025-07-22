import { AddProduct } from "./add-product";
import { ProductList } from "./product-list";
import { addProductAction } from "./add-product.action";

export default function AdminProductPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your products and inventory here
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <AddProduct action={addProductAction} />
        </div>
      </div>
      <ProductList />
    </div>
  );
}
