import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "400","500","600","800"],
});

export const metadata = {
  title: "MD. Jisan — Full-Stack Developer",
  description: "MD. Jisan builds thoughtful, high-performance digital products and web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.className} antialiased bg-ink text-white overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col  ">
        <header id="home" className="py-2 w-full md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="pt-10 md:w-11/12 mx-auto">
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
