import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

export const metadata = {
  title: "Portfolio of Roopan Raj - Software Developer",
  description:
    "This is the portfolio of Roopan Raj. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.",
};

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills /> 
      <Projects />
      <Education />
      <ContactSection />
    </div>
  )
};