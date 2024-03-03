'use client'

import { useState } from "react";

const projectList = [
  {
    imagePath:
      "project_images/portfoliosite.png",
    title: "Portfolio Website (this one)",
    desc: "Made in NextJS using tailwindCSS and daisyUI.",
    link: "https://www.royvivat.dev/",
  },
  {
    imagePath:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Portfolio Websit)",
    desc: "Made in NextJS using tailwindCSS and daisyUI.",
    link: "",
  },
	{
    imagePath:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Portfolio Websit)",
    desc: "Made in NextJS using tailwindCSS and daisyUI.",
    link: "",
  },
	{
    imagePath:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Portfolio Websit)",
    desc: "Made in NextJS using tailwindCSS and daisyUI.",
    link: "",
  },
	{
    imagePath:
      "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
    title: "Portfolio Websit)",
    desc: "Made in NextJS using tailwindCSS and daisyUI.",
    link: "",
  },
];

export default function Projects() {
	const [projects, setProjects] = useState(projectList)
	
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full">
          <h1 id="projects" className="mb-5 text-5xl font-bold font-mono">
            Projects
          </h1>
          <p>
            Below is a list of projects that I've worked on. Some will have a
            brief desription and stock image whilst others will link to a more
            complete description or github repo.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-start m-20 gap-20 max-w-6xl">
          {projects.map((proj) => {
            return (
              <div className="card w-80 bg-base-100 shadow-xl" key={proj.title}>
                <figure>
                  <img
                    src={proj.imagePath}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{proj.title}</h2>
                  <p>{proj.desc}</p>
									{proj.link ?
                  <div className="card-actions justify-end">
                    <a className="btn btn-primary" href={proj.link} target="_blank">Visit</a>
                  </div> : ""}
                </div>
              </div>
            );
          })}
          {/*           
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
