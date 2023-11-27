import {
  
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

import { experience } from "../../helpers/data";
import { formatDate } from "../../helpers/helper";

export default function Experience() {
  return (
    <div className="flex flex-col p-4 items-center justify-center sm:p-20">
      <h3 className="text-slate-200 text-center items-center w-full text-4xl">
        Experiencies
      </h3>
      <div>
        <Timeline>
          {experience.map((exp) => {
            return (
              <TimelineItem key={exp.id}>
                <TimelinePoint />
                <TimelineContent>
                  <TimelineTime>{formatDate(exp.fechaFin)}</TimelineTime>
                  <TimelineTitle>{exp.puesto}</TimelineTitle>
                  <TimelineBody>
                    {
                      <ul>
                        {exp.tareas.map((item) => {
                          return <li key={item.id} className="text-green-400">- {item.descripcion}</li>;
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
