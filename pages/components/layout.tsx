import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import ChatBot from "./chatbot";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white text-black min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/launc-Logo.png"
            alt="LaunchPad Digital Logo"
            width={70}
            height={70}
          />
          <span className="text-xl font-bold">LaunchPad Digital</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-[96px] pb-[72px] px-6 md:px-20">{children}</main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-100 border-t border-gray-200 p-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} LaunchPad Digital. All rights reserved.
      </footer>

      {/* Fixed Social Icons */}
      <div className="fixed bottom-4 right-4 z-50 flex space-x-4 text-xl">
        <a
          href="https://facebook.com/Successdigitalmark"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/khoza5885"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-green-500"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black"
        >
          <FaXTwitter />
        </a>
      </div>
      <ChatBot />
    </div>
  );
}
