import React from "react";
import { Check } from "lucide-react";
import Navbar from "./Navbar";

const PricingSection = () => {
  const plans = [
    {
      title: "Free",
      price: "$0 / month",
      description: "Best for individuals just starting out.",
      features: [
        "Basic Campaigns",
        "100 Contacts",
        "Email Support",
        "1 GB Storage",
      ],
      button: "Get Started",
    },
    {
      title: "Pro",
      price: "$395 / month",
      description: "For growing businesses with more needs.",
      features: [
        "Unlimited Campaigns",
        "10,000+ Contacts",
        "Priority Support",
        "50 GB Storage",
        "Team Collaboration",
      ],
      button: "Start Free Trial",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "Tailored solutions for large-scale businesses.",
      features: [
        "Unlimited Campaigns",
        "Custom Contacts",
        "Dedicated Manager",
        "Advanced Analytics",
        "Unlimited Storage",
      ],
      button: "Contact Sales",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* Galaxy Background */}
      <div>
        <Navbar />
      </div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-5xl font-bold text-yellow-400">Pricing</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Choose the plan that suits your business. Flexible, scalable, and
          designed for growth.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 border transition transform hover:scale-105 hover:shadow-yellow-400/30 shadow-lg ${
              plan.highlight
                ? "bg-gradient-to-b from-yellow-500/20 to-black border-yellow-400"
                : "bg-black border-gray-700"
            }`}
          >
            <h3 className="text-2xl font-semibold text-yellow-400">
              {plan.title}
            </h3>
            <p className="mt-2 text-3xl font-bold">{plan.price}</p>
            <p className="mt-3 text-gray-400">{plan.description}</p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <Check className="text-yellow-400 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-8 w-full py-3 rounded-lg font-semibold transition ${
                plan.highlight
                  ? "bg-yellow-400 text-black hover:bg-yellow-300"
                  : "bg-black border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="max-w-6xl mx-auto mt-20 relative z-10 overflow-x-auto">
        <table className="w-full border-collapse text-left text-gray-300">
          <thead>
            <tr>
              <th className="p-4"></th>
              <th className="p-4 text-yellow-400">Free</th>
              <th className="p-4 text-yellow-400">Pro</th>
              <th className="p-4 text-yellow-400">Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Campaigns Included", "Basic", "Unlimited", "Unlimited"],
              ["Contacts", "100", "10,000+", "Custom"],
              ["Storage", "1 GB", "50 GB", "Unlimited"],
              ["Team Collaboration", "✘", "✔", "✔"],
              ["Dedicated Manager", "✘", "✘", "✔"],
              ["Priority Support", "✘", "✔", "✔"],
            ].map((row, i) => (
              <tr
                key={i}
                className="border-t border-gray-700 hover:bg-yellow-400/5 transition"
              >
                <td className="p-4 font-medium">{row[0]}</td>
                <td className="p-4">{row[1]}</td>
                <td className="p-4">{row[2]}</td>
                <td className="p-4">{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Info Boxes */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="bg-black/70 border border-yellow-400/40 rounded-xl p-8 hover:shadow-yellow-400/20 hover:scale-105 transition">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            PCI DSS
          </h3>
          <p className="text-gray-300">
            Secure payment processing with PCI DSS compliance. We protect your
            sensitive data with industry-leading standards.
          </p>
          <button className="mt-6 px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
            Contact Sales
          </button>
        </div>
        <div className="bg-black/70 border border-yellow-400/40 rounded-xl p-8 hover:shadow-yellow-400/20 hover:scale-105 transition">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            PII & HIPAA
          </h3>
          <p className="text-gray-300">
            Protect customer information with advanced compliance for PII and
            HIPAA standards.
          </p>
          <button className="mt-6 px-5 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        © 2025 Galaxy Brand. All rights reserved.
      </footer>
    </div>
  );
};

export default PricingSection;
