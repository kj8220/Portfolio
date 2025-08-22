// In app/page.js

import { personalData } from "@/utils/data/personal-data";
//import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
//import HeroSection from "./components/homepage/hero-section";
//import Projects from "./components/homepage/projects";
// import Skills from "./components/homepage/skills"; // <-- Keep this commented out

export const metadata = {
  title: "Portfolio of Roopan Raj - Software Developer",
  description:
    "This is the portfolio of Roopan Raj. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

// We assume you have a getData function here for your projects, so keep it.
// async function getData() { ... };

export default async function Home() {
  // const data = await getData(); // If you use this, uncomment it
  return (
    <div>
     {/* <HeroSection />*/}
      {/*<AboutSection />*/}
      <Experience />
      {/* <Skills /> */} {/* <-- Keep this commented out */}
      {/* <Projects />*/}
      <Education />
      <ContactSection />
    </div>
  )
};