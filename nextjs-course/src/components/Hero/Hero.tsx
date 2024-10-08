import { getGameImage } from "@/helpers/games";
import { Games } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const ScrollableGameList = ({games}: {games: Games[]}) => {
    return(<>
        {games.map((game) => {
            return(
                <Link href={`/games/${game.slug}`} key={game.id} className="h-32 w-auto">
                    <Image 
                        className="h-full w-full object-cover brightness-75 hover:brightness-100"
                        src={getGameImage(game.image)}
                        alt={game.title}
                        width={175}
                        height={128}
                    />
                </Link>
            );
        })}
    </>)
}

export const Hero = ({games}: {games: Games[]}) =>{
    return (
        <div className="container mx-auto my-6 h-[42vh] flex-center gap-2">
            <div className="flex-center">
                <div className="flex-center flex-col">
                    <Image src={'/assets/images/nintendo-64.png'} width={160} height={150} alt="Nintendo Logo" />
                    <h1 className="text-4xl">The best Nintendo 64 fan website</h1>
                </div>
            </div>
            <div className="ml-auto w-auto h-full border border-slate-700 p-2 rounded-lg">
                <div className="flex h-full overflow-hidden gap-2">
                    <div className="scroll-ttb flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(0, 10)}/>
                        <ScrollableGameList games={games.slice(0, 10)}/>
                    </div>
                    <div className="scroll-btt flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(10, 20)}/>
                        <ScrollableGameList games={games.slice(10, 20)}/>
                    </div>
                    <div className="scroll-ttb flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(20, 30)}/>
                        <ScrollableGameList games={games.slice(20, 30)}/>
                    </div>
                    <div className="scroll-btt flex flex-col gap-2">
                        <ScrollableGameList games={games.slice(30, 40)}/>
                        <ScrollableGameList games={games.slice(30, 40)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}