import { Footer, FooterCopyright } from "flowbite-react";
/*import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";*/
import { perfil } from "../../../helpers/data";
//import { Social } from "../social/Social";

export default function component() {
  return (
    <Footer className="h-56  bg-gray-700">
      <div className="w-full">
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-center ">
          <FooterCopyright
           className="text-xl font-extrabold"
           style={{color:"white"}}
            by={perfil.nombre + " " + perfil.apellido+". "+"v.2.0"}
            year={2023}
          />
          {/*<div className="mt-4 flex flex-row space-x-6 sm:mt-0 sm:justify-center">
            
            <FooterIcon href="#" icon={BsFacebook}  className="text-indigo-200 hover:text-yellow-300"/>
            <FooterIcon href="#" icon={BsInstagram} className="text-indigo-200 hover:text-yellow-300" />
            <FooterIcon href="#" icon={BsTwitter} className="text-indigo-200 hover:text-yellow-300" />
            <FooterIcon href="#" icon={BsGithub} className="text-indigo-200 hover:text-yellow-300" />
            <FooterIcon href="#" icon={BsDribbble} className="text-indigo-200 hover:text-yellow-300" />
          </div>*/}
        </div>
      </div>
    </Footer>
  );
}
