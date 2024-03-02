import { IoMdDownload } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('/pexels-felix-mittermeier-2832045.jpg')",
        backdropFilter: "blur(16px)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 backdrop-blur"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold font-mono">Hi, I'm Roy.</h1>
          <p className="text-lg">
            I'm passionate about math, code, and artificial intelligence.
          </p>
          <p className="mb-5 text-lg">
            I seek nature, exercise, and adventure.
          </p>

          <div className="flex justify-center space-x-4 mb-20">
            <Link href="#about-me" scroll={true}>
              <button className="btn btn-primary">About me</button>
            </Link>
            <Link href="#projects" scroll={true}>
              <button className="btn btn-primary">View Projects</button>
            </Link>
            <a href="/resume.pdf" download className="btn btn-primary">
              <IoMdDownload className="inline-block mr-1" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center items-center">
            <FaArrowDown className="text-6xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
