import React, { useEffect } from "react";
import TopBar from "./components/TopBar";
import Rules from "./components/Rules";
import Prizepool from "./components/Prizepool";
import MainContent from "./components/MainContent";
import FAQs from "./components/FAQs";
import Sponsors from "./components/Sponsors";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      <TopBar />
      <div className="App-contentWrapper">
        <div id="home" className="App-mainContent">
          <MainContent />
        </div>
        <div id="prizes" className="App-prizepool">
          <Prizepool />
        </div>
        <div id="sponsors" className="App-sponsors">
          <Sponsors />
        </div>
        <div id="rule-book" className="App-rules">
          <Rules />
        </div>
        <div id="faqs" className="App-faqs">
          <FAQs />
        </div>
        <Footer />
      </div>
    </div>
  );
}
