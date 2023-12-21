import { Button } from "flowbite-react";
import Info from "./Info";

import Education from "../../education/Education";
import Experience from "../../experience/Experience";
import Skills from "../../skills/Skills";
import CV from "../../../assets/CV_Andi_Infante.pdf";

const downloadCv = () => {};

export default function About() {
  return (
    <div
      className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center animate-fade-down animate-once animate-ease-out"
      id="about"
    >
      <h3 className="text-slate-200 text-center items-center w-full text-4xl">
        Sobre mí
      </h3>
      <span className="text-slate-200 text-center items-center justify-center w-full ">
        Mi introducción
      </span>
      <div className="flex flex-row text-center">
        <div className="">
          <Info />
          <div className="p-5 items-center justify-center">
            <p className="text-slate-200 text-center">
              Soy graduado de
              <span className="text-orange-400 font-bold">
                {" Ingeniería de Sistemas"}
              </span>
              . Como profesional independiente, he llevado a cabo diversos
              proyectos para las empresas en las que he colaborado. En  la búsqueda
              constante de ampliar mi experiencia y profundizar mis
              conocimientos en el fascinante ámbito del desarrollo, estoy
              decidido a seguir aprendiendo y creciendo en este apasionante
              mundo. 😍
            </p>
            {/*
            <p className="text-slate-200 text-center">
              I am a graduate of <span className="text-orange-400 font-bold">{"Systems Engineering"}</span>. As a freelance developer I
              have created several projects for some well-known clients and for
              the companies where I have worked, but I want to gain more
              experience and learn more about that world
            </p>
  */}
          </div>
        </div>
      </div>

      <div className="">
        <Button outline gradientDuoTone="pinkToOrange" onClick={downloadCv}>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Andi_Infante.pdf"
          >
            Descargar CV
          </a>
        </Button>
      </div>

      <div>
        <Skills />
      </div>

      {/*
      <div className="flex flex-row p-8">
        <Experience />
      </div>

      <div className="flex flex-row p-8">
        <Education />
      </div>
      
      */}
    </div>
  );
}
