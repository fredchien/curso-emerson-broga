import Link from "next/link";
import { NavbarListLinkProps } from "./types";
import { NavbarListItem } from "./NavbarListItem";

export const NavBarListLink = ({href, children, className, ...props}: NavbarListLinkProps) => {
    return (
      <NavbarListItem className={`p-0 ${className}`}>
        <Link href={href} className="flex gap-2 items-center p-2 rounded-lg w-full" {...props}>
          {children}
        </Link>
      </NavbarListItem>
    );
  }