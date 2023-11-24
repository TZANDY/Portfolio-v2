import './nav.css'
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

export default function Nav() {
    return (

        <Navbar fluid rounded className='sticky top-0'>
            <NavbarBrand className='flex'>
                <i className='text-slate-200 text-3xl'>Andi</i>
            </NavbarBrand>
            <div className="flex md:order-2">
                
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="projects">Projects</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>

    )
}