import Buttons from "@/utils/Buttons";
import React from "react";

//mendaftarkan parameter
interface Heroprops {
    title: string,
    textButton: string
}
const Herofile : React.FC<Heroprops> = ({title, textButton}) => {
    
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-bold text-gray-800 mb-8">
            Welcome to My Website {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Buttons/>
        </div>
      </div>
    </div>
  );
};

export default Herofile;
