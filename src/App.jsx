import Navbar from "./components/Navbar/Navbar";
import About from "./components/container/About";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer";
import Hero from "./components/container/Hero";
import Portfolio from "./components/container/Portfolio";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
