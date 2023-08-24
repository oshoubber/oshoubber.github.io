'use client';
import { Navbar, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import ThemeSwitcher from './ThemeSwitcher';

export default function App() {
  return (
    <Navbar
      className="bg-black w-full flex justify-between"
      isBlurred
      shouldHideOnScroll
      maxWidth="full"
    >
      <NavbarContent className="w-full gap-4 p-4">
        <NavbarItem>
          <Link className="hover:text-yellow-500 text-white" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-yellow-500">
          <Link className="hover:text-yellow-500 text-white" href="#">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="w-full p-4" justify="end">
        <ThemeSwitcher />
        <NavbarItem className="hover:text-yellow-500">
          <Link className="hover:text-yellow-500 text-white" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
