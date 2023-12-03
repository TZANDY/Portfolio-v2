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
    <div className="flex flex-col p-4 items-center justify-center sm:p-20">
      <h3 className="dark:text-slate-200 text-center items-center w-full text-4xl ">
        Experiencia
      </h3>
      <span className=" dark:text-slate-200">mi viaje personal</span>
      <div>
        <Timeline className="border-slate-400 dark:border-cyan-600">
          {experience.map((exp) => {
            return (
              <TimelineItem key={exp.id}>
                <Timeline.Point  icon={FaBriefcase}/>
                <TimelineContent>
                  <TimelineTime>{formatDate(exp.fechaFin)}</TimelineTime>
                  <TimelineTitle>{exp.puesto}</TimelineTitle>
                  <TimelineBody>
                    {
                      <ul>
                        {exp.tareas.map((item) => {
                          return <li key={item.id}>- {item.descripcion}</li>;
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
