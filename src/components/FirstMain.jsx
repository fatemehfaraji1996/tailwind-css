import React, { useState } from "react";
const data = [
  {
    image: "https://img.icons8.com/stickers/100/performance-2.png",
    h3: "Performance Optimization",
    p: "Enhancing React apps by minimizing re-renders, lazy loading components, and utilizing memoization techniques for improved performance and speed.",
  },
  {
    image: "https://img.icons8.com/nolan/64/request-service.png",
    h3: "Redux State Management",
    p: "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
  },
  {
    image: "https://img.icons8.com/color/48/design--v1.png",
    h3: "Redux State Management",
    p: "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
  },
  ,
  {
    image: "https://img.icons8.com/3d-fluency/94/deployment.png",
    h3: "Tailwind Responsive Design",
    p: "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
  },
  {
    image: "https://img.icons8.com/color/48/combine.png",
    h3: "Vite Production Deployment",
    p: "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
  },
  {
    image:
      "https://img.icons8.com/color/48/checked-identification-documents.png",
    h3: "React Library Integration",
    p: "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
  },
];

export default function FirstMain() {
  let pp = 0;
  return (
    <>
      {/* < div className=" w-auto"> */}
      <div className="flex flex-col-reverse sm:flex-col-reverse md:flex lg:flex-row  ml-10 xl:flex-row 2xl:flex-row ">
        <div className="flex-col  ">
          <h1 className="text-7xl font-serif font-bold mb-10">
            Scalable Apps with frameworks
          </h1>
          <div className="">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptate et neque earum iste hic <br />
              consequatur nulla deserunt architecto numquam!
            </p>
          </div>
          <div className="">
            <button className="btn rounded bg-black m-4">
              <p className="text-white p-2 hover:bg-sky-700 ">
                Downlod for free
              </p>
            </button>
            <button className="btn outline-slate-100 outline-1 border-2 p-2 rounded-xl">
              Git Hub Repo
            </button>
          </div>
        </div>

        {/* pic */}
        <div className="flex">
          <img
            src="https://tailwind-shadcn.netlify.app/hero-source.svg"
            alt=""
          />
        </div>
      </div>
      {/*  */}

      <div className="ml-5 flex-col mb-10 ">
        <h2 className=" mb-2  text-4xl font-serif font-bold">
          Everything you need to start a website
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          consequuntur.{" "}
        </p>
      </div>
      {/*              start        cards                */}

      <div className=" mr-5 ml-5 flex flex-col gap-14 justify-center sm:flex-row  md:flex flex-row  lg:flex lg:flex-row lg: flex justify-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex  hover:bg-indigo-50 drop-shadow-sm p-5"
            >
              <div className="flex ">
                <img className="w-8 h-8" src={item.image} alt="" />
                <div className="flex-col ">
                  <h3 className="text-2xl">{item.h3}</h3>
                  <p>{item.p}</p>
                </div>
              </div>
            </div>
            
          );
        })}
      </div>
      {/*             end      cards*/}
      <div className="flex justify-center mt-8">
        <p className="text-xl">Works with your technologies</p>
      </div>
      {/* start pic */}
      <div className="flex justify-center gap-32 mt-11">
        <img src="https://tailwind-shadcn.netlify.app/images/js.png" alt="" />
        <img src="https://tailwind-shadcn.netlify.app/images/ts.png" alt="" />
        <img
          src="https://tailwind-shadcn.netlify.app/images/react.png"
          alt=""
        />
        <img
          src="https://tailwind-shadcn.netlify.app/images/redux.png"
          alt=""
        />
        <img
          src="https://tailwind-shadcn.netlify.app/images/tailwind.png"
          alt=""
        />
        <img
          src="https://tailwind-shadcn.netlify.app/images/nextjs.png"
          alt=""
        />
      </div>
      {/* end pic */}
      <div className="flex flex-col  gap-5 w-3/4 h-96 bg-black  mr-auto ml-auto rounded-lg mt-24">
        <div className="mr-auto ml-auto mt-16">
          <h2 className="text-7xl text-white">Build faster websites</h2>
        </div>
        <div className="mr-auto ml-auto mt-4">
          <p className="text-white">
            Pull content from anywhere and serve it fast with Astro's next-gen
            island architecture
          </p>
          <div className="flex justify-center mr-auto ml-auto">
            <button className="bg-white p-4 rounded-lg mt-12">
              Get started
            </button>
          </div>
        </div>
      </div>
      {/*       end */}
      <div className="flex justify-center">
        <div className="flex flex-col mt-16 mb-64 ">
          <p className="">Copyright © 2024. All rights reserved</p>
          <p className="mr-auto ml-auto"> Made by Web3Templates</p>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}
