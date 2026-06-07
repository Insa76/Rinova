import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Properties } from "./components/Properties";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

import { PropertyDetail } from "./properties/PropertyDetail";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/propiedad/:id"
        element={<PropertyDetail />}
      />
    </Routes>
  );
}