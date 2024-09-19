import { PropsWithChildren } from "react";
import { Head } from "@/app/admin/Head";

const Layout = ({ children }: PropsWithChildren) => {
  return <>
    <Head />
    <div className="bg-gray-100">
      {children}
    </div>;
  </>
};

export default Layout;