import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import Work from "./components/Work";
import MyContent from "./components_2/Content";
import Navbar2 from "./components_2/Navbar";
export default function Home() {
  return (
    <>
      <Navbar2 />
      <MyContent />
      
      {/* <Navbar />
      <Header />
      <Expertise />
      <Work />
      <Experience />
      <Contact /> */}
    </>
  );
}
