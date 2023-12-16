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
    <Navbar
      fluid
      className="bg-white/90 backdrop-blur-sm dark:bg-white/5 shadow-sm shadow-slate-400"
    >
      <NavbarBrand className="transform transition hover:scale-110">
        <h1 className="logo text-black font-bold dark:text-slate-200 text-3xl">
          <Link
            to={"/"}
            className="font-extrabold text-green-600 dark:text-green-400"
          >
            andi.dev
          </Link>
        </h1>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink className="transform transition hover:scale-105">
          <Link
            to={"/"}
            className=" hover:text-green-600 dark:text-green-400 font-extrabold dark:hover:text-slate-100  "
          >
            Home
          </Link>
        </NavbarLink>

        <NavbarLink className="transform transition hover:scale-105">
          <Link
            to={"about"}
            className="hover:text-green-600 dark:text-slate-400 font-extrabold dark:hover:text-slate-100  "
          >
            Info
          </Link>
        </NavbarLink>

        <NavbarLink className="transform transition hover:scale-105">
          <Link
            to={"projects"}
            className="hover:text-green-600 dark:text-slate-400 font-extrabold dark:hover:text-slate-100  "
          >
            Projects
          </Link>
        </NavbarLink>

        <NavbarLink className="transform transition hover:scale-105">
          <Link
            to={"contact"}
            className="hover:text-green-600 dark:text-slate-400 font-extrabold dark:hover:text-slate-100  "
          >
            Contact
          </Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
