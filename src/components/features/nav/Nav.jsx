import "./nav.css";
import { AiTwotoneThunderbolt } from "react-icons/ai";
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
    <Navbar fluid rounded  className=" bg-white/10">
      <NavbarBrand>
        <i className="text-slate-200 text-3xl">Andi</i>
        <AiTwotoneThunderbolt className="text-slate-200 text-3xl" />
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink>
          <Link to={"/"}>Home</Link>
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
