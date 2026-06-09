// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Layout from "./components/layout";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>LaunchPad Digital - Mobile App Development</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">
            Crafting Impactful Mobile Experiences
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            We design and build innovative apps that users love.
          </p>
          <a
            href="#contact"
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700"
          >
            Let's Build Your App
          </a>
        </div>
        <Image
          src="/images/Untitled design.png"
          alt="App Mockup"
          width={400}
          height={400}
          className="mt-10 md:mt-0"
        />
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold">iOS & Android Development</h3>
            <p className="text-gray-600">
              Native or cross-platform solutions tailored for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Cross-Platform Solutions</h3>
            <p className="text-gray-600">
              React Native & Flutter for faster, cost-efficient builds.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">App Design & Strategy</h3>
            <p className="text-gray-600">
              Clean UI/UX paired with smart product thinking.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-4">About LaunchPad Digital</h2>
        <p className="text-gray-700 max-w-3xl">
          We’re a creative mobile development studio driven by innovation and
          clean code. Our mission is to craft digital products that solve real
          problems and delight users.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <ContactForm />
      </section>
    </Layout>
  );
}
