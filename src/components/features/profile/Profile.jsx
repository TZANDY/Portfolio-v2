import { Button } from "flowbite-react";
import { MENSAJE, perfil } from "../../../helpers/data";
//import { CgHello } from "react-icons/cg";

export default function Profile() {
  return (
    <div className="md:w-1/2 md:ml-10 pl-5 sm:w-max mx-auto">
      <h1 className="text-6xl md:text-7xl xl:text-9xl font-bold text-cyan-400">
        {perfil.displayName}
      </h1>
      <h3 className="text-2xl font-semibold text-green-400">{perfil.rol}</h3>
      <p className="text-xl text-slate-100 dark:text-slate-300 font-normal mt-2 mb-2">
        {MENSAJE}
      </p>
      <Button outline gradientDuoTone="purpleToPink">
        Say Hello!🖐
      </Button>
    </div>
  );
}
