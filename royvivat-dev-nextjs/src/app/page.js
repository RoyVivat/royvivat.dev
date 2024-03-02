import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
export default function Home() {
  return (
    <div>
      <Hero/>
      <div className="m-40"/>
      <AboutMe/>
      <div className="m-40"/>
      <Projects/>
    </div>
  );
}
