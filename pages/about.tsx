// pages/about.tsx
import Head from "next/head";
import { NextPage } from "next";
import Layout from "./components/layout";

const About: NextPage = () => {
  return (
    <Layout>
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-12">
      <Head>
        <title>About RifumoApps</title>
      </Head>

      <h1 className="text-4xl font-bold mb-6">About RifumoApps</h1>

      <p className="text-lg text-gray-700 max-w-3xl mb-6">
        RifumoApps is a mobile app development studio committed to building beautiful, functional, and scalable mobile apps. Our mission is to help startups and businesses craft mobile experiences that people love.
      </p>

      <p className="text-lg text-gray-700 max-w-3xl mb-6">
        Founded by a passionate mobile developer, we specialize in cross-platform development using technologies like React Native and Flutter, as well as native iOS/Android when needed. With a design-first mindset and a focus on clean, maintainable code, we turn ideas into user-friendly apps.
      </p>

      <h2 className="text-2xl font-bold mb-4 mt-10">Our Values</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Innovation:</strong> We’re always learning and experimenting to stay ahead.</li>
        <li><strong>Quality:</strong> We don’t ship it until it’s right.</li>
        <li><strong>Clarity:</strong> In both code and communication.</li>
        <li><strong>Partnership:</strong> We collaborate closely with clients every step of the way.</li>
      </ul>
    </div>
    </Layout>
  );
};

export default About;
