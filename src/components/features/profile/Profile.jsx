import { MENSAJE, perfil } from "../../../helpers/data";
//import { CgHello } from "react-icons/cg";

export default function Profile() {
  return (
    <div className="md:w-1/2 md:ml-10 pl-5 sm:w-max ">
      <h1 className="text-2xl font-bold dark:text-cyan-400">
        {perfil.displayName}
      </h1>
      <h3 className="text-lg font-semibold dark:text-red-600">{perfil.rol}</h3>
      <p className="text-base dark:text-purple-400 font-normal mt-2">
        {MENSAJE}
      </p>
      <button
        href="#contact"
        className="flex text-center p-1 mt-2 bg-red-700 text-white text-sm border-1 border-collapse rounded-md hover:bg-black"
      >
        Say Hello!🖐
        {/*<CgHello className="text-xl ml-1"/>*/}
      </button>
    </div>
  );
}
