import { Button } from "flowbite-react";
import Info from "./Info";
import Interest from "./Interest";

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
          <p className="text-slate-200 text-left">
            I am a graduate of Systems Engineering. As a freelance developer I
            have created several projects for some well-known clients and for
            the companies where I have worked, but I want to gain more
            experience and learn more about that world
          </p>

          <Button outline gradientDuoTone="greenToBlue">Descargar CV</Button>
        </div>
      </div>

      <span className="dark:text-slate-200 text-center items-center justify-center w-full ">
        My interests
      </span>
      <div className="flex flex-row text-center">
        <div className="">
          <Interest />
        </div>
      </div>
    </section>
  );
}
