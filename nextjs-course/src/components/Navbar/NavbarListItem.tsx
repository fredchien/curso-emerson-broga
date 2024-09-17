import { NavbarListItemsProps } from "./types";

export const NavbarListItem = ({children, className, ...props}: NavbarListItemsProps) => {
    return (
      <li className={`my-2 rounded-lg px-2 bg-transparent hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center ${className}`} {...props}>
        {children}
      </li>
    );
  }