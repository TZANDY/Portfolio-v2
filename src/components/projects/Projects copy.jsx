import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoWindows, IoLogoPython, IoLogoAngular } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { projects } from "../../helpers/data";

export default function Projects() {
    const ListarProyectosById = (id) => {

        projects.map((item, index) => {
            if (index === id) {
                return (
                    <div className="" key={item.id}>
                        <h3 className="text-cyan-300 font-bold">{item.name}</h3>
                        <hr />
                        <p className="font-normal text-red-400">{item.description}</p>
                    </div>
                )
            }
            else {
                return (<span className="font-normal text-red-400">error</span>)
            }
        })
    }

    return (
        <div className=" bg-slate-900 sd:w-1/3 ">
            <h2 className="text-center text-6xl text-slate-200">Some works</h2>
            <div className="grid auto-rows-[192px] grid-cols-3 gap-4 gap-y-5">
                {[...Array(7)].map((_, i) => (
                    <div
                        key={i}
                        className={`flex row-span-1 rounded-xl border-2 hover:bg-black dark:backdrop-blur-sm dark:bg-white/10 border-slate-400/10 bg-neutral-100 p-4 dark:bg-gray-800  shadow-md dark:shadow-cyan-300 ${i === 3 || i === 6 ? "col-span-2" : ""
                            }`}
                    >
                        <div className="m-1 pr-1">
                            {/*<IoLogoCss3 className="text-yellow-300 w-4 m-1" />
                            <IoLogoHtml5 className="text-yellow-300 w-4 m-1" />*/}
                            <IoLogoJavascript className="text-yellow-300 w-4 m-1" />
                            <IoLogoReact className="text-yellow-300 w-4 m-1" />
                            <IoLogoNodejs className="text-yellow-300 w-4 m-1" />
                            <IoLogoPython className="text-yellow-300 w-4 m-1" />
                            <DiMysql className="text-yellow-300 w-4 m-1" />
                            <IoLogoWindows className="text-yellow-300 w-4 m-1" />
                            <IoLogoAngular className="text-yellow-300 w-4 m-1" />
                        </div>

                        {projects.map((item, index) => {
                            if (index === i) {
                                return (
                                    <div className="flex flex-col h-max" key={item.id}>
                                        <h3 className="text-cyan-400 font-bold">{item.name} <span className="text-xs text-yellow-800 bg-yellow-300 rounded pr-1 pl-1">{item.version}</span></h3>
                                        <p className="font-semibold text-green-400 border-b-2 border-t-2">{item.description}</p>
                                        <div className="flex flex-wrap">
                                            {item.tecnologias.map((item, ind) =>
                                                <span className="text-sky-400 font-semibold rounded" key={ind}>{"["}{item}{"]"}
                                                </span>)}
                                        </div>
                                    </div>
                                )
                            }
                        })}

                    </div>
                ))}
            </div>


        </div>
    )
}