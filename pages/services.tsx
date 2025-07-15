// pages/services.tsx
import Head from "next/head";
import { NextPage } from "next";
import Layout from "./components/layout";

const Services: NextPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
      <Head>
        <title>Services - RifumoApps</title>
      </Head>

      <h1 className="text-4xl font-bold mb-10">Our Services</h1>

      <div className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">📱 Mobile App Development</h2>
          <p className="text-gray-700">
            We build high-performance native and cross-platform mobile applications using React Native, Flutter, and native SDKs for both iOS and Android.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🎨 UI/UX Design</h2>
          <p className="text-gray-700">
            We create intuitive, elegant, and engaging user interfaces that enhance usability and elevate your brand. Every app starts with strong visual and interaction design.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 MVP & Prototyping</h2>
          <p className="text-gray-700">
            Have an idea but not sure where to start? We help you build a Minimum Viable Product (MVP) quickly and affordably so you can test, validate, and grow.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔧 App Maintenance & Support</h2>
          <p className="text-gray-700">
            We provide ongoing support, updates, and maintenance for your apps — keeping them secure, performant, and up-to-date as your business grows.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Services;
