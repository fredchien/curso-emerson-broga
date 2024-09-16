import { HomeIcon, GameIcon, TopIcon, WalkIcon, UserIcon } from "@/components";

const NavbarList = ({children, className}) => {
  return (
    <ul className={`my-4 border-t border-indigo-400/20 hover:border-indigo-400/40 ${className}`}>
      {children}
    </ul>
  );
}

const NavbarListItem = ({children, className}) => {
  return (
    <li className={`my-2 rounded-lg px-2 bg-transparent hover:bg-indigo-400/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center ${className}`}>
      {children}
    </li>
  );
}



export const NavBar = () =>{
    return(
        <nav className="flex flex-col h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/80 w-72 p-2 text-slate-300">
          <div className="flex items-center justify-center my-4">
            <img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo Emerson Broga" className="w-auto h-12 p-2"/>
          </div>
          <NavbarList className={'flex-grow'}>
            <NavbarListItem>
              <HomeIcon className="h-4 w-4"/> Home
            </NavbarListItem>
            <NavbarListItem>
              <GameIcon className="h-4 w-4"/> Games
            </NavbarListItem>
            <NavbarListItem>
              <TopIcon className="h-4 w-4"/> Top 10
            </NavbarListItem>
            <NavbarListItem>
              <WalkIcon className="h-4 w-4"/> Walkthroughs
            </NavbarListItem>
          </NavbarList>
          <NavbarList>
            <NavbarListItem>
              <UserIcon className="h-4 w-4"/> User
            </NavbarListItem>
          </NavbarList>
        </nav>
    )
}