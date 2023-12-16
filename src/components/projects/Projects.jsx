import { projects } from "../../helpers/data";
import { Badge } from "flowbite-react";
import { Card, Button } from "flowbite-react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <h3 className="text-slate-200 text-center items-center justify-center w-full text-4xl">
        Proyectos
      </h3>
      <span className="text-slate-200 text-center items-center justify-center w-full ">
        Algo divertido por aquí
      </span>
      <div className="grid m-2 gap-2 gap-y-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pb-20 pt-10">
        {projects.map((item) => {
          return (
            <Card
              key={item.id}
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={400}
                  height={200}
                  src="https://static.vecteezy.com/system/resources/thumbnails/012/012/758/small/black-and-white-pattern-abstract-texture-abstract-background-design-illustration-vector.jpg"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tecnologias.map((tec, i) => (
                  <Badge color="success" key={i}>
                    {tec}
                  </Badge>
                ))}
              </div>
              <Button outline gradientDuoTone="greenToBlue">
                vamos!
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
