import {
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

import { FaBriefcase } from "react-icons/fa";

import { experience } from "../../helpers/data";
import { formatDate } from "../../helpers/helper";

export default function Experience() {
  return (
    <div className="max-w-screen-md mx-auto m-20 flex flex-col items-center justify-center">
      <h3 className="text-slate-200 text-center items-center w-full text-4xl ">
        Experiencia
      </h3>
      <span  className="text-slate-200 text-center items-center justify-center w-full ">mi viaje personal</span>
      <div className="pt-10">
        <Timeline className="border-slate-400 dark:border-cyan-600">
          {experience.map((exp) => {
            return (
              <TimelineItem key={exp.id}>
                <Timeline.Point  icon={FaBriefcase}/>
                <TimelineContent>
                  <TimelineTime className="text-red-500 dark:text-red-500">{formatDate(exp.fechaFin)}</TimelineTime>
                  <TimelineTitle className="text-yellow-300 dark:text-yellow-300">{exp.puesto}</TimelineTitle>
                  <TimelineBody>
                    {
                      <ul>
                        {exp.tareas.map((item) => {
                          return <li key={item.id}  className="text-slate-200 dark:text-slate-200">👉 {item.descripcion}</li>;
                        })}
                      </ul>
                    }
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
