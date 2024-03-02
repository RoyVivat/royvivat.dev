import { IoMdDownload } from "react-icons/io";
import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/2832045/pexels-photo-2832045.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold font-mono">Hi, I'm Roy.</h1>
          <p className="text-lg">
            I'm passionate about math, code, and artificial intelligence.
          </p>
          <p className="mb-5 text-lg">
            I seek nature, exercise, and adventure.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/about">
              <button className="btn btn-primary">About me</button>
            </Link>
            <button className="btn btn-primary">View Projects</button>
            <a href="/resume.pdf" download className="btn btn-primary">
              <IoMdDownload className="inline-block mr-1" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
