import React from "react";
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
  // ,  {
  //   image:'https://img.icons8.com/3d-fluency/94/deployment.png',
  //   h3:'Tailwind Responsive Design',
  //   p:'Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.'
  //     },  {
  //       image:'https://img.icons8.com/color/48/combine.png',
  //       h3:'Vite Production Deployment',
  //       p:'Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.'
  //         },  {
  //           image:'https://img.icons8.com/color/48/checked-identification-documents.png',
  //           h3:'React Library Integration',
  //           p:'Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.'
  //             },
];
export default function FirstMain() {
  return (
    <>
      <div className=" sm:flex-col-reverse md:flex lg:flex-row mr-5 ml-10 xl:flex-row 2xl:flex-row">
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
        <div className="flex justify-center ">
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


      <div className=" sm:bg-yellow-400 sm:flex sm:flex-row  md:bg-orange-700 md:flex flex-row  lg:bg-slate-700 lg:flex flex-row ">
        {data.map((item, index) => {
          return (
            <div className="flex">
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
    </>
  );
}
