import NavBar from "./components/navbar/NavBar";
import HeroSection from "./components/Hero/HeroSection";
import AboutMe from "./components/aboutMe/AboutMe";
import Footer from "./components/footer/Footer";
import ContactSection from "./components/contact/Social";
import ComingSoon from "./components/commingSoon/CommingSoon";
function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe />
      {/* <MyWork /> */}
      <ComingSoon  />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
