import "./nav.css";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar fluid className="bg-white/90 dark:bg-white/5 shadow-md">
      <NavbarBrand>
        <h1 className="logo text-black font-bold dark:text-slate-200 text-3xl">
          <Link
            to={"/"}
            className="font-extrabold text-green-600 dark:text-green-300"
          >
            andi.dev
          </Link>
        </h1>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink >
          <Link to={"/"} className=" dark:text-cyan-400 dark:hover:text-slate-200 ">
            Home
          </Link>
        </NavbarLink>

        <NavbarLink>
          <Link to={"about"} className=" dark:text-cyan-400 dark:hover:text-slate-200 ">About</Link>
        </NavbarLink>

        <NavbarLink>
          <Link to={"projects"} className=" dark:text-cyan-400 dark:hover:text-slate-200 ">Projects</Link>
        </NavbarLink>

        <NavbarLink>
          <Link to={"contact"} className=" dark:text-cyan-400 dark:hover:text-slate-200 ">Contact</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
