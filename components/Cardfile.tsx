import React from "react";
import data_card from "../data/data_card.json";
const Cardfile = () => {
  return (
    <div className="grid grid-cols-4 mobile:grid-cols-2 gap-6 px-16">
      {data_card.map((value) => {
        return (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={value.image}
                  alt="A cat"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Case study
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {value.name}
                </a>
                <p className="mt-2 text-gray-500">
                  Getting a new business off the.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cardfile;
