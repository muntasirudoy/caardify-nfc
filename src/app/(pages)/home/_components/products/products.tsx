

import React from "react";
import ProductCard from "./products-card";
import SectionTitle from "@/components/ui/section-title";
import { Badge } from "@/components/ui/badge";
import { getProducts } from "@/actions/product";



const ProductsSection = async () => {
  const products = await getProducts();

  if (!products.length) {
    return <div className=" text-center">
      No product found!
    </div>
  }
  return (
    <div className=" bg-gray-50 py-20">
      <div className="container ">
        <SectionTitle
          title="Modern Connections, Seamless Sharing"
          subTitle="From Business Cards to NFC Tags, Unlock the Power of Contactless Technology"
        >
          <Badge className=" rounded-full font-secondary py-1 px-3">
            Our Products
          </Badge>
        </SectionTitle>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
          {products?.map((details: any, i: number) => (
            <ProductCard key={i} details={details} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
