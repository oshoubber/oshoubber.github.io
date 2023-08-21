'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from '@nextui-org/react';

export default function App() {
  return (
    <Navbar className="bg-black w-full">
      <NavbarContent className="sm:flex gap-4 p-4" justify="start">
        <NavbarItem>
          <Link className="hover:text-yellow-500" color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-yellow-500">
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="p-4" justify="end">
        <NavbarItem className="hover:text-yellow-500">
          <Button as={Link} color="primary" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
