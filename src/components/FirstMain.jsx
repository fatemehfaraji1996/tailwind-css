import React from "react";

export default function FirstMain() {
  return (
    <>
    
      <div className="flex  mr-10 ml-10">
        <div className="flex-col  w-3/4" >
          <h1 className="text-7xl">Scalable Apps with frameworks</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptate et neque earum iste hic consequatur nulla deserunt
              architecto numquam!
            </p>
          </div>
          <div>
            <button type="button">Downlod for free</button>
            <button type="button">Git Hub Repo</button>
          </div>
        </div>

        {/* pic */}
        <div  className="flex-col">
          <img
            src="https://tailwind-shadcn.netlify.app/hero-source.svg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
