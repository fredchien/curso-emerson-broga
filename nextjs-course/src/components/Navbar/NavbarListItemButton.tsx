'use client';

import { NavbarListItem } from "./NavbarListItem";
import { NavbarListItemButtonProps } from "./types";

export const NavbarListItemButton = ({children, className, ...props}: NavbarListItemButtonProps) => {
    return (
      <NavbarListItem className={`p-0 ${className}`}>
        <button className="flex gap-2 items-center rounded-lg p-2 w-full" {...props}>
            {children}
        </button>
      </NavbarListItem>
    );
  }