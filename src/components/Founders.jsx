import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Navbar from "./Navbar";

export default function Founders({ founders }) {
  const defaultFounders = [
    { id: 1, name: "Aryan Fulsunge", title: "Founder", img: "/aryan.png", bio: "Founder with a vision to revolutionize digital experiences through innovation, design, and scalable systems.", linkedin: "https://www.linkedin.com/in/aryan-fulsunge-7885081b4/", email: "mailto:aryanfulsunge@gmail.com" },
    { id: 2, name: "Aryan Gavhale", title: "Co-founder", img: "/aryan g .png", bio: "Co-founder with a passion for engineering seamless user experiences and business-driven digital products.", linkedin: "https://www.linkedin.com/in/aryan-gavhale-98248522a/", email: "mailto:aryangavhale1405@gmail.com" },
    { id: 3, name: "Ayush Itkhede", title: "CTO", img: "/ayush.png", bio: "CTO with deep expertise in cutting-edge tech, responsible for leading the engineering team and tech strategy.", linkedin: "https://www.linkedin.com/in/ayush-itkhede/", email: "https://midnightsolutions.in/ayushitkhede4@gmail.com" },
    { id: 4, name: "Tushar Dhurwe", title: "COO", img: "/tushar.png", bio: "COO ensuring operational excellence and managing resources to drive company growth and efficiency.", linkedin: "https://www.linkedin.com/in/tushar-dhurwe-b336721a8/", email: "https://midnightsolutions.in/tushardhurwe@gmail.com" },
    { id: 5, name: "Aniruddh Singh", title: "CEO @ Crescentis Marketing", img: "/anirudt.png", bio: "Strategic leader bringing business partnerships, growth mindset, and impactful marketing execution.", linkedin: "https://in.linkedin.com/in/aniruddh-singh-bb4b76a4", email: "https://midnightsolutions.in/Aniruddhsingh1001@gmail.com" },
    { id: 6, name: "Nihar Joshi", title: "Project Manager", img: "/nihar.png", bio: "Project manager aligning teams and timelines for successful and timely delivery of digital solutions.", linkedin: "https://www.linkedin.com/in/nihar-joshi-3a1133179/", email: "https://midnightsolutions.in/nihar.joshi2003@gmail.com" },
    { id: 7, name: "Rupesh Jahagirdar", title: "Marketing Head", img: "/rupesh.png", bio: "Marketing strategist driving digital campaigns and building brand impact through targeted outreach.", linkedin: "https://www.linkedin.com/in/rupesh-jahagirdar-0608a525b/", email: "https://midnightsolutions.in/rupeshjahagirdar2003@gmail.com" },
  ];

  const people = founders && founders.length === 7 ? founders : defaultFounders;

  // Three rows: 3 + 3 + 1
  const row1 = people.slice(0, 3);
  const row2 = people.slice(3, 6);
  const row3 = people.slice(6);

  return (
    <section className="py-12 px-4 bg-black text-yellow-100">
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-100 to-amber-100 font-dm-sans">
            Meet our founders
          </h2>
          <p className="mt-2 text-yellow-200/80 max-w-2xl mx-auto">
            Seven passionate builders driving the company forward.
          </p>
        </header>

        <div className="space-y-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {row1.map((p) => (
              <FlipCard key={p.id} person={p} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {row2.map((p) => (
              <FlipCard key={p.id} person={p} />
            ))}
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 justify-center gap-8">
            {row3.map((p) => (
              <div className="w-full sm:w-2/3 lg:w-1/3 mx-auto">
                <FlipCard person={p} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1200px;
        }
        .flip-card-inner {
          transition: transform 700ms cubic-bezier(.2,.9,.2,1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner,
        .flip-card:focus-within .flip-card-inner {
          transform: rotateY(180deg) translateZ(0);
        }
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          position: absolute;
          inset: 0;
          border-radius: 12px;
        }
        .flip-card-front {
          transform: rotateY(0deg) translateZ(0);
        }
        .flip-card-back {
          transform: rotateY(180deg) translateZ(0);
        }
      `}</style>
    </section>
  );
}

function FlipCard({ person }) {
  return (
    <div className="flip-card relative" tabIndex={0} aria-label={`Founder: ${person.name}`}>
      <div className="flip-card-inner h-[500px] relative w-full h-[1040px] rounded-xl shadow-xl" style={{ transformStyle: "preserve-3d" }}>
        {/* Front */}
        <div className="flip-card-front relative bg-gradient-to-br from-amber-400 via-yellow-500 to-yellow-700 text-black overflow-hidden rounded-xl p-6 flex flex-col items-center justify-center gap-4">
          <div className="w-[300px] h-[480px] rounded-lg overflow-hidden ring-4 ring-black/20 shadow-lg">
            <img src={person.img} alt={`Portrait of ${person.name}`} className="w-full h-full object-cover" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">{person.name}</h3>
            <p className="text-sm text-black/80">{person.title}</p>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back relative bg-gradient-to-br from-amber-200 via-yellow-200 to-yellow-300 text-black p-6 rounded-xl flex flex-col justify-between items-center">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-2">About {person.name.split(" ")[0]}</h4>
            <p className="text-sm">{person.bio}</p>
          </div>

          <div className="mt-4 flex gap-6">
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn of ${person.name}`} className="text-black hover:text-white transition-colors text-2xl">
              <FaLinkedin />
            </a>
            <a href={person.email} aria-label={`Email ${person.name}`} className="text-black hover:text-white transition-colors text-2xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
