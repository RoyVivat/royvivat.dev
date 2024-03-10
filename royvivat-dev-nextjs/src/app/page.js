import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f2f8fd" }}>
      <Hero className="ml-[20px] mr-[20px]" />
      <div className="m-20" />
      <AboutMe />
      <div className="m-20" />
      <Projects />
    </div>
  );
}
