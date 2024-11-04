import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Divider = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 0.5 });
    // gsap.to("#cta", { opacity: 1, y: -80, delay: 2 });
  }, []);

  return (
    <section className="w-screen overflow-hidden h-full common-padding bg-black relative">
      <div className="screen-max-width">
        <div className="mb-10 w-full md:flex items-end justify-between">
          <h1 id="hero" className="section-heading">
            Overview
          </h1>
          {/* 
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Spotify Unwrapped: 2024 Q2 Shareholder Report
        </p> */}
        </div>
      </div>
    </section>
  );
};

export default Divider;
