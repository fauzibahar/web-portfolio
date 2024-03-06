import Navbar from "./components/Navbar/Navbar";
import About from "./components/container/About";
import Contact from "./components/container/Contact";
import Courses from "./components/container/Course/Courses";
import Footer from "./components/container/Footer";
import Hero from "./components/container/Hero";

import Teacher from "./components/container/Teacher";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
