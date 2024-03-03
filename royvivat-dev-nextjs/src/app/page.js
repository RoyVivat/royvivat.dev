import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
export default function Home() {
  return (
    <div style={{backgroundColor: "#f2f8fd"}}>
      <Hero/>
      <div className="m-20"/>
      <AboutMe/>
      <div className="m-20"/>
      <Projects/>
    </div>
  );
}
