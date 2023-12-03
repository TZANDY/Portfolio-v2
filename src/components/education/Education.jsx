import { Timeline } from "flowbite-react";
import { PiStudent } from "react-icons/pi";
import { education } from "../../helpers/data";
import { formatDate } from "../../helpers/helper";

export default function Education() {
  return (
    <div className="flex flex-col p-4 items-center justify-center sm:p-20">
      <h3 className="dark:text-slate-200 text-center items-center w-full text-4xl">
        Formación
      </h3>
      <span className="dark:text-slate-200">donde todo empezó</span>
      <div>
        <Timeline className="border-slate-400 dark:border-cyan-600">
          {education.map((edu) => {
            return (
              <Timeline.Item key={edu.id}>
                <Timeline.Point icon={PiStudent} />
                <Timeline.Content>
                  <Timeline.Time>{formatDate(edu.fechaFin)}</Timeline.Time>
                  <Timeline.Title>
                    {edu.grado} en {edu.carrera}
                  </Timeline.Title>
                  <Timeline.Body>{edu.institution}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </div>
  );
}
