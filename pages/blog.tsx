// pages/blog.tsx
import Head from "next/head";
import { NextPage } from "next";
import Layout from "./components/layout";

const Blog: NextPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
      <Head>
        <title>Blog - RifumoApps</title>
      </Head>

      <h1 className="text-4xl font-bold mb-10">Insights & Updates</h1>

      <div className="space-y-8">
        {/* Blog Post Preview 1 */}
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">Why Startups Should Choose Cross-Platform Apps</h2>
          <p className="text-gray-700 mb-2">
            Cross-platform development can save time and money for early-stage companies. Here’s why we recommend it to our clients...
          </p>
          <a href="#" className="text-purple-600 hover:underline text-sm font-medium">
            Read more
          </a>
        </div>

        {/* Blog Post Preview 2 */}
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">Designing for Delight: Mobile UI Tips</h2>
          <p className="text-gray-700 mb-2">
            Your app’s design is more than how it looks — it’s how it works. Here are key UI/UX tips we apply in every project...
          </p>
          <a href="#" className="text-purple-600 hover:underline text-sm font-medium">
            Read more
          </a>
        </div>

        {/* Blog Post Preview 3 */}
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">From Idea to App Store: Our Process</h2>
          <p className="text-gray-700 mb-2">
            Ever wonder what it takes to go from a napkin sketch to a live app? Here’s how we help clients get there step-by-step...
          </p>
          <a href="#" className="text-purple-600 hover:underline text-sm font-medium">
            Read more
          </a>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Blog;
