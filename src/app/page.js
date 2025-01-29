import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Work from "./components/Work";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Expertise />
      <Work />
      <Experience />
      <Contact />
    </>
  );
}
