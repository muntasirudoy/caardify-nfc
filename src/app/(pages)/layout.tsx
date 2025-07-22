import React from "react";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PagesLayout;
