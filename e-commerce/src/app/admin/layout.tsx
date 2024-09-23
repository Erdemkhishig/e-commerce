import { PropsWithChildren } from "react";
import { Head } from "@/app/admin/Head";
import Aside from "./Aside";


const Layout = ({ children }: PropsWithChildren) => {
  return <body>
    <Head />
    <div className="flex">
      <Aside />
      <div className="bg-gray-100 w-[85%]">
        {children}
      </div>
    </div>
  </body>
};

export default Layout;