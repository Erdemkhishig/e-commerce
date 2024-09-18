import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/provider/Auth.provider";
import { ToastContainer } from "react-toastify";




export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
>
        <AuthProvider>
          <Header />
          <div className="bg-gray-100 py-8 " style={{ minHeight: "calc(100vh - 282px - 68px)" }}>
            {children}
          </div>
          <Footer />
        </AuthProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
