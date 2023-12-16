import { Button } from "flowbite-react";
import Info from "./Info";

import Education from "../../education/Education";
import Experience from "../../experience/Experience";
import Skills from "../../skills/Skills";

export default function About() {
  return (
    <div className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center" id="about">
      <h3 className="text-slate-200 text-center items-center w-full text-4xl">
        About me
      </h3>
      <span className="text-slate-200 text-center items-center justify-center w-full ">
        My introduction
      </span>
      <div className="flex flex-row text-center">
        <div className="">
          <Info />
          <div className="p-5 items-center justify-center">
            <p className="text-slate-200 text-center">
              I am a graduate of <span className="text-orange-400 font-bold">{"Systems Engineering"}</span>. As a freelance developer I
              have created several projects for some well-known clients and for
              the companies where I have worked, but I want to gain more
              experience and learn more about that world
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <Button outline gradientDuoTone="pinkToOrange">
          Descargar CV
        </Button>
      </div>

      <div>
        <Skills/>
      </div>

      <div className="flex flex-row p-8">
        <Experience />
      </div>

      <div className="flex flex-row p-8">
        <Education />
      </div>

    </div>
  );
}
