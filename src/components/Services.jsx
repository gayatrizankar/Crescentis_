import React from "react";

export default function Services() {
  const services = [
    { title: "Digital Marketing", desc: "Boost your brand with data-driven strategies." },
    { title: "Creative Design", desc: "Designs that engage, inspire, and convert." },
    { title: "Tech Solutions", desc: "Web, app, and AI-powered tools for scaling." },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      <h2 className="text-4xl font-bold text-yellow-400 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-500/40 transition"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              {s.title}
            </h3>
            <p className="text-gray-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
