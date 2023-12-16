import { Timeline } from "flowbite-react";
import { PiStudent } from "react-icons/pi";
import { education } from "../../helpers/data";
import { formatDate } from "../../helpers/helper";

export default function Education() {
  return (
    <div className=" max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center">
      <h3 className="text-slate-200 text-center items-center w-full text-4xl">
        Formación
      </h3>
      <span className="text-slate-200 text-center items-center justify-center">donde todo empezó</span>
      <div className="pt-10">
        <Timeline className="border-slate-400 dark:border-cyan-600 ">
          {education.map((edu) => {
            return (
              <Timeline.Item key={edu.id}>
                <Timeline.Point icon={PiStudent}/>
                <Timeline.Content>
                  <Timeline.Time className="text-red-500 dark:text-red-500">{formatDate(edu.fechaFin)}</Timeline.Time>
                  <Timeline.Title className="text-yellow-300 dark:text-yellow-300">
                    {edu.grado} en {edu.carrera}
                  </Timeline.Title>
                  <Timeline.Body className="text-slate-200 dark:text-slate-200" >{edu.institution}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
