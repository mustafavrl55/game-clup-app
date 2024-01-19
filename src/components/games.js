/* eslint-disable @next/next/no-img-element */
import React from "react";
import WindowIcon from "@mui/icons-material/Window";
import GamesIcon from '@mui/icons-material/Games';
import Link from "next/link";

const Game = ({ game }) => {



  
  return (
    <Link href= {`/${game.id}`} className="bg-slate-900 w-72 pb-10 rounded-lg hover:scale-105 transform-cpu ">
      <img
        src={game.background_image}
        alt=""
        className="w-72 h-48 rounded-t-lg "
      />
      <div className="pl-2">
        <div className="py-4 px-4 flex justify-between  ">
          <div>
            {game?.platforms?.map((platform) => {
              if (platform?.platform?.slug === "playstation5") {
                return <WindowIcon key={platform.id} />;
              } else if (platform?.platform?.slug === "xbox-series-x") {
                return <GamesIcon key={platform.id}/>
              }
              else if (platform?.platform?.slug === "macos") {
                return <GamesIcon key={platform.id}/>
              }
            })}
          </div>
          <span className="bg-gray-500 p-1 rounded-lg ">{game.metacritic}</span>
        </div>
        <h3 className="text-3xl">{game.name}</h3>
        <img
          src="https://game-club-me.vercel.app/assets/bullseye-6dca1569.png"
          alt=""
          className="w-8 h-8 mt-3"
        />
      </div>
    </Link>
  );
};

export default Game;
