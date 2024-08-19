import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoCarousel from "./components/PhotoCarousel";

const App = () => {
  // useEffect(() => {
  //   // GSAP animation for page transition
  //   gsap.to("#slide", { opacity: 1, delay: 0.5 });
  // });

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <PhotoCarousel />
      {/* <Highlights /> */}
    </main>
  );
};

export default App;
