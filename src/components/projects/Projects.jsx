import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoWindows, IoLogoPython, IoLogoAngular } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { projects } from "../../helpers/data";
import { Badge } from 'flowbite-react';
import { Card, Button } from 'flowbite-react';


export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center md:grid-cols-3 lg:grid-cols-3 ">
            <h3 className="text-slate-200 text-center items-center justify-center w-full text-4xl">Some projects</h3>
            <span className="text-slate-200 text-center items-center justify-center w-full ">Some projects</span>
            <div className="grid grid-cols-3 m-2 gap-2 gap-y-3">
                {
                    projects.map((item, index) => {
                        return (<Card key={item.id}
                            className="max-w-sm"
                            renderImage={() => <img width={400} height={200} src="https://static.vecteezy.com/system/resources/thumbnails/012/012/758/small/black-and-white-pattern-abstract-texture-abstract-background-design-illustration-vector.jpg" alt="image 1" />}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {item.name}
                            </h5>
                            
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {item.tecnologias.map((tec, i) => <Badge color="success" key={i}>{tec}</Badge>)}
                            </div>
                            <Button outline gradientDuoTone="greenToBlue">
                                vamos!
                            </Button>
                        </Card>)

                    })
                }

            </div>


        </div>
    )
}