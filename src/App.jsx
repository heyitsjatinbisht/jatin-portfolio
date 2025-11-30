import TerminalAbout from "./components/TerminalAbout";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <TerminalAbout />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
