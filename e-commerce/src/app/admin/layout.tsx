import { PropsWithChildren } from "react";
import { Head } from "@/app/admin/Head";
import Aside from "./Aside";
import React from "react"
import { ProductProvider } from "@/contexts/Productcontext"
import { FileUploadProvider } from "@/contexts/Uploadcontext";


const Layout = ({ children }: PropsWithChildren) => {
  return <body>
    <ProductProvider>
      <FileUploadProvider>
        <Head />
        <div className="flex">
          <Aside />
          <div className="bg-gray-100 w-[85%]">
            {children}
          </div>
        </div>
      </FileUploadProvider>
    </ProductProvider>
  </body>
};

export default Layout;