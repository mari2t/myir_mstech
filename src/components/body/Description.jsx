import React from "react";

export default function Description({ img, setImg, text, setText }) {
  return (
    <div className="columns-1 w-1/2 ">
      <div className="mt-5 mb-2  bg-green-100 ml-5 mr-5 rounded-md min-h-full">
        <div className="p-8">
          <img className="rounded-md m-auto w-4/5" src={img} alt="" />
        </div>
        <div className="px-8 pb-2">
          <h3 className="text-2xl  m-auto w-4/5 leading-10 rounded-md bg-neutral-100 p-2 border-solid border-2 border-green-600">
            {text}
          </h3>
        </div>
      </div>
    </div>
  );
}
