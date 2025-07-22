import { getProductByProductId } from "@/actions/product";
import { OrderForm } from "./_components/order-form";
import { ConfirmOrderWrapper } from "./confirm-order-wrapper";

type PageProps = {
  searchParams: Promise<{
    productId: string;
  }>;
};

const Page = async ({ searchParams }: PageProps) => {
  const productId = (await searchParams).productId;
  if (!productId) {
    return <div>Error: Product ID is required</div>;
  }

  try {
    const product = await getProductByProductId(productId);
    if (!product.data) {
      return <div>Product not found</div>;
    }
    return (
      <ConfirmOrderWrapper>
        <OrderForm product={product.data} />{" "}
      </ConfirmOrderWrapper>
    );
  } catch (error) {
    return <div> Unable to fetch product details{JSON.stringify(error)}</div>;
  }
};

export default Page;
