"use client";
import HeroIntro from "./HeroIntro";
import About from "./About";
import WhyChooseCrescentis from "./WhyChooseCrescentis";
import CoreValues from "./CoreValues";
import WhyCrescentis from "./WhyCrescentis";
import Footer from "./Footer";
import HowWeWork from "./HowWeWork";

export default function FullScreenSnap() {
  return (
    <div
      className="h-screen w-full overflow-y-scroll scroll-snap-y scroll-snap-mandatory bg-black text-white"
      style={{ scrollSnapType: "y mandatory" }}
    >
      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <HeroIntro />
      </section>

      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <About />
      </section>

      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <WhyChooseCrescentis />
      </section>

      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <CoreValues />
      </section>

      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <HowWeWork />
      </section>

      <section className="h-screen flex items-center justify-center" style={{ scrollSnapAlign: "start" }}>
        <WhyCrescentis />
      </section>
      
      <section
  className="h-screen flex items-center justify-center"
  style={{ scrollSnapAlign: "start" }}
>
  <div className="h-full w-full">
    <Footer />
  </div>
</section>

    </div>
  );
}
