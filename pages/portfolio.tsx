// pages/portfolio.tsx
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import Layout from "./components/layout";

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
        <Head>
          <title>Portfolio - LaunchPad Digital</title>
        </Head>

        <h1 className="text-4xl font-bold mb-10">Our Work</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/mockup.png"
              alt="Project 1 Screenshot"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">BudgetTrack App</h2>
              <p className="text-gray-700 mb-2">
                A modern finance app to track expenses, budgets, and financial
                goals in real time.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Tech Stack:</strong> React Native, Supabase, Tailwind
                CSS
              </p>
              <a
                href="#"
                className="text-purple-600 hover:underline text-sm font-medium"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/Untitled design.png"
              alt="Project 2 Screenshot"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Yeawego-Eats</h2>
              <p className="text-gray-700 mb-2">
                A food delivery app that connects users with local restaurants
                and provides a seamless ordering experience.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                <strong>Tech Stack:</strong> React Native, Supabase, Native Wind
              </p>
              <a
                href="#"
                className="text-purple-600 hover:underline text-sm font-medium"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
