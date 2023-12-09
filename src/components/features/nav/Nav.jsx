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
    <Navbar fluid className=" dark:bg-white/5">
      <NavbarBrand>
        <h1 className="logo text-black font-bold dark:text-slate-200 text-3xl"><Link to={'/'} >ANDI</Link></h1>
        
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink>
          <Link to={"/"} className="font-bold">Home</Link>
        </NavbarLink>

        <NavbarLink>
          <Link to={"about"}>About</Link>
        </NavbarLink>

        <NavbarLink>
          <Link to={"projects"}>Projects</Link>
        </NavbarLink>

        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
