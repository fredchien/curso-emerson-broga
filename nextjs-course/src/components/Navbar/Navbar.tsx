import { HomeIcon, GameIcon, TopIcon, WalkIcon, UserIcon, FormButton, LogoutIcon } from "@/components";
import { NavbarProps } from "./types";
import { NavbarList } from "./NavbarList";
import { NavBarListLink } from "./NavbarListLink";
import Image from "next/image";
import { NavbarListItem } from "./NavbarListItem";
import { handleSingOutForm } from "@/app/auth/sign-out/actions";

export const NavBar = ({className, user, ...props}: NavbarProps) =>{
    return(
        <nav className={`fixed top-0 left-0 flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/80 w-72 p-2 text-slate-300 ${className}`} {...props}>
          <div className="flex items-center justify-center my-4">
            <Image 
              src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" 
              alt="Logo Emerson Broga" 
              className="w-auto h-12 p-2"
              width={112}
              height={32}
            />
          </div>
          <NavbarList className={'flex-grow'}>
            <NavBarListLink href="/">
              <HomeIcon className="h-4 w-4"/> Home
            </NavBarListLink>
            <NavBarListLink href="/games">
              <GameIcon className="h-4 w-4"/> Games
            </NavBarListLink>
            <NavBarListLink href="/top-10">
              <TopIcon className="h-4 w-4"/> Top 10
            </NavBarListLink>
            <NavBarListLink href="/walkthroughs">
              <WalkIcon className="h-4 w-4"/> Walkthroughs
            </NavBarListLink>
          </NavbarList>
          
            {user ? (
              <NavbarList>
                <NavBarListLink href="/user">
                  <UserIcon className="h-4 w-4"/> {user.name}
                </NavBarListLink>
                <NavbarListItem>
                  <LogoutIcon className="h-4 w-4"/>
                  <FormButton action={handleSingOutForm}>Logout</FormButton>
                </NavbarListItem>
              </NavbarList>
            ):
              <NavbarList> 
                <NavBarListLink href="/auth/sign-in">
                  <UserIcon className="h-4 w-4"/> Login
                </NavBarListLink>
              </NavbarList>  
            }
        </nav>
    )
}