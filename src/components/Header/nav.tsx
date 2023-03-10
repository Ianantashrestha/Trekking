import Link from "next/link";
import { Row } from "@app/system";
const Nav = () => {
  const links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Destination",
      to: "/",
    },
    {
      title: "Travel Info",
      to: "/",
    },
    {
      title: "Company",
      to: "/",
    },
    {
      title: "Contact Us",
      to: "/",
    },
  ];
  return (
    <Row columnGap={40}>
      {links?.map((link) => {
        return (
          <Link key={link?.title} href={link?.to}>
            {link?.title}
          </Link>
        );
      })}
    </Row>
  );
};

export default Nav;
