import React from "react";
import Navbar from "./Navbar";

const moreBlogs = [
  {
    title: "Social Media Secrets for Entrepreneurs",
    snippet:
      "Learn how to build engagement on a startup budget using social media effectively.",
    link: "/case-study-social-media",
    img: "https://source.unsplash.com/400x250/?socialmedia,startup",
  },
  {
    title: "Advanced SEO Tactics for Startups",
    snippet:
      "Proven SEO strategies to help small businesses compete with established players.",
    link: "/case-study-seo-advanced",
    img: "https://source.unsplash.com/400x250/?seo,analysis",
  },
  {
    title: "Email Marketing That Converts",
    snippet:
      "Boost open rates and drive conversions with targeted email campaigns.",
    link: "/case-study-email-marketing",
    img: "https://source.unsplash.com/400x250/?email,marketing",
  },
];

const MoreBlogs = () => {
  return (
    <div className="bg-black text-white py-20 px-6 relative overflow-hidden">
      <Navbar />
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 mb-4 font-serif">
          More Blogs
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore more case studies and actionable insights from our team.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-[100px]">
        {moreBlogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-black/70 border border-yellow-400/40 rounded-2xl shadow-lg p-6 hover:scale-105 transition transform flex flex-col justify-between"
          >
            
            <div>
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900 font-serif">
                {blog.title}
              </h3>
              <p className="text-gray-300">{blog.snippet}</p>
            </div>
            <div className="mt-auto">
              <a
                href={blog.link}
                className="inline-block px-6 py-3 mt-4 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                Read Case Study
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreBlogs;
