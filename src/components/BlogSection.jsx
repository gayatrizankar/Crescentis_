import React from "react";
import Navbar from "./Navbar";

const BlogSection = () => {
  const blogs = [
    {
      title: "How to Rank #1 on Google in Pune",
      snippet:
        "A step-by-step SEO guide tailored to local businesses to boost visibility and traffic.",
      img: "https://source.unsplash.com/400x250/?seo,computer",
      link: "/case-study-seo",
    },
    {
      title: "Content Marketing ROI",
      snippet:
        "Why content is key for startups and how it saves you money while building brand authority.",
      img: "https://source.unsplash.com/400x250/?content,marketing",
      link: "/case-study-content",
    },
    {
      title: "Designing a High-Converting Website",
      snippet:
        "Best practices that turn visitors into customers and improve your online performance.",
      img: "https://source.unsplash.com/400x250/?website,design",
      link: "/case-study-website",
    },
  ];

  return (
    <div className="bg-black text-white py-20 px-6 relative overflow-hidden">
      <Navbar />
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 mb-4 font-serif">
          From Our Blog
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Our blog is a resource hub for entrepreneurs and marketers. We publish
          articles on SEO, content marketing, social media strategies, and case studies.
          Startups build authenticity and trust by sharing quality content consistently. 
          Check back often for fresh guides, trends, and expert advice.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-black/70 border border-yellow-400/40 rounded-2xl shadow-lg p-6 hover:scale-105 transition transform flex flex-col justify-between"
          >
            <div>
              
              <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-yellow-500 to-yellow-900 font-serif">
                {blog.title}
              </h3>
              <p className="text-gray-300 mb-4">{blog.snippet}</p>
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

      {/* More Blogs Button */}
      <div className="text-center mt-12">
        <a
          href="/more-blogs"
          className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-500 via-amber-200 to-yellow-300 text-black font-bold shadow-lg shadow-yellow-500/50 hover:scale-105 transition"
        >
          More Blogs
        </a>
      </div>
    </div>
  );
};

export default BlogSection;
