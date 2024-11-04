import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoCarousel from "./components/PhotoCarousel";
import PhotoGrid from "./components/PhotoGrid";
import Divider from "./components/Divider";

const App = () => {
  // useEffect(() => {
  //   // GSAP animation for page transition
  //   gsap.to("#slide", { opacity: 1, delay: 0.5 });
  // });

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <PhotoCarousel className="h-[60%]" />
      <Divider />
      <PhotoGrid />
    </main>
  );
};

export default App;
