import { Navbar, Text, Button, Link } from "@nextui-org/react";
import Image from "next/image";

export const Navigation = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar variant={"sticky"}>
        {/* Menu, Image, and Website Name */}
        <Navbar.Brand>
          <Image
            src="/favicon.ico"
            alt="Next.js Logo"
            width={40}
            height={40}
            priority
          />
          <Text b color="inherit">
            Edwin H
          </Text>
        </Navbar.Brand>

        {/* Nav Links */}
        <Navbar.Content enableCursorHighlight hideIn="sm">
          <Navbar.Link href="#About">About</Navbar.Link>
          <Navbar.Link href="#Experience">Experience</Navbar.Link>
          <Navbar.Link href="#Contact">Contact</Navbar.Link>
          <Navbar.Item>
            <Button auto as={Link} href="#">
              Resume
            </Button>
          </Navbar.Item>
        </Navbar.Content>

        {/* Mobile Menu */}
        <Navbar.Toggle showIn={"sm"} aria-label="toggle navigation" />

        <Navbar.Collapse>
          {links.map((item, index) => (
            <Navbar.CollapseItem key={index}>
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const links = [
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Experience",
    href: "#Experience",
  },
  {
    name: "Work",
    href: "#Work",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
  {
    name: "Resume",
    href: "#Resume",
  },
];
