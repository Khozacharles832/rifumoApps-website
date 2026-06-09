import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mjgdranr");

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center border border-purple-100">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold text-purple-700 mb-2">Thank You!</h2>
        <p className="text-gray-600">
          We&rsquo;ve received your app idea and will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 space-y-6"
      >
        <div>
          <h2 className="text-3xl font-bold text-purple-700">
            Let&apos;s Build Your App
          </h2>
          <p className="text-gray-600 mt-2">
            Tell us about your idea and we&apos;ll contact you.
          </p>
        </div>

        {/* Name */}

        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="John Smith"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* WhatsApp */}

        <div>
          <label
            htmlFor="whatsapp"
            className="block mb-2 font-medium text-gray-700"
          >
            WhatsApp Number
          </label>

          <input
            id="whatsapp"
            type="tel"
            name="whatsapp"
            required
            placeholder="+27 82 123 4567"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* App Idea */}

        <div>
          <label
            htmlFor="appIdea"
            className="block mb-2 font-medium text-gray-700"
          >
            Tell us about your app idea
          </label>

          <textarea
            id="appIdea"
            name="appIdea"
            rows={6}
            required
            placeholder="Describe your app, its features, target audience, and any goals you have..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <ValidationError
            prefix="App Idea"
            field="appIdea"
            errors={state.errors}
          />
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-white font-semibold py-4 rounded-xl shadow-md disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Request a Consultation"}
        </button>

        <p className="text-center text-sm text-gray-500">
          We typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
