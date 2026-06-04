import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Properties } from "./components/Properties";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}