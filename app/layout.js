import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import AppContextProvider from "./components/AppContext";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Portfolio", // Here the title of the page
  description: "Md Ramjan Khan", // as you can see its just desc
};

export default function RootLayout({ children }) {
  return (
    <AppContextProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Navbar/>
        <Button/>        
          {children}
      </body>
    </html>
    </AppContextProvider>
  );
}
