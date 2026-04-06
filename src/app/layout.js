
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "next-themes";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const metadata = {
  title: "Nayedul Alam",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={` ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={` ${poppins.className} `}>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>

          <Navbar /> {/* update link hover animation  */}

          <div className=" container grid lg:grid-cols-[250px_1fr] divide-x h-full">

            <aside className="relative hidden w-full lg:block  pt-8 pr-4 ">
              <Sidebar />
            </aside>

            <div className="flex flex-col divide-y pt-20 lg:pt-8 lg:pl-8 ">

              <main className="pb-8">
                {children}
              </main>

              <Footer />

            </div>

          </div>

        </ThemeProvider>

      </body>
    </html >
  );
}
