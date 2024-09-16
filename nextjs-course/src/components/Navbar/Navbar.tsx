import { HomeIcon, GameIcon, TopIcon, WalkIcon, UserIcon } from "@/components";

export const NavBar = () =>{
    return(
        <nav className="flex flex-col gap-4 h-screen bg-slate-900 border-r border-indigo-400/40 hover:border-indigo-400/80 w-72 p-2 text-slate-300">
          <div>
            <img src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt="Logo Emerson Broga" className="max-w-full p-2"/>
          </div>
          <ul className="flex-grow my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li className="my-2 rounded-lg px-2 bg-transparent hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex gap-2 items-center">
              <HomeIcon className="h-4 w-4"/> Home
            </li>
            <li className="my-2 rounded-lg px-2 bg-transparent hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex gap-2 items-center">
              <GameIcon className="h-4 w-4"/> Games
            </li>
            <li className="my-2 rounded-lg px-2 bg-transparent hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex gap-2 items-center">
              <TopIcon className="h-4 w-4"/> Top 10
            </li>
            <li className="my-2 rounded-lg px-2 bg-transparent hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex gap-2 items-center">
              <WalkIcon className="h-4 w-4"/> Walkthroughs
            </li>
          </ul>
          <ul className="my-4 border-t border-indigo-400/20 hover:border-indigo-400/40">
            <li className="my-2 rounded-lg px-2 bg-transparent hover:bg-slate-800 hover:text-slate-100 cursor-pointer flex gap-2 items-center">
              <UserIcon className="h-4 w-4"/> User
            </li>
          </ul>
        </nav>
    )
}