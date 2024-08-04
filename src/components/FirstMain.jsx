import React from "react";

export default function FirstMain() {
  return (
    <>
      <div className=" sm:flex-col-reverse md:flex lg:flex-row mr-5 ml-10 xl:flex-row 2xl:flex-row">
        <div className="flex-col ">
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
        <div className="flex justify-center">
          <img
            src="https://tailwind-shadcn.netlify.app/hero-source.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
