import { Button } from "flowbite-react";
import Info from "./Info";

import Education from "../../education/Education";
import Experience from "../../experience/Experience";

export default function About() {
  return (
    <section
      className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center"
      id="about"
    >
      <h3 className="dark:text-slate-200 text-center items-center justify-center w-full text-4xl">
        About me
      </h3>
      <span className="dark:text-slate-200 text-center items-center justify-center w-full ">
        My introduction
      </span>
      <div className="flex flex-row text-center">
        <div className="">
          <Info />
          <div className="p-5 items-center justify-center">
            <p className="text-slate-200 text-center">
              I am a graduate of Systems Engineering. As a freelance developer I
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
      
      <div className="flex flex-row">
        <Experience/>
      </div>

      <div className="flex flex-row text-right">
        <Education />
      </div>
    </section>
  );
}
