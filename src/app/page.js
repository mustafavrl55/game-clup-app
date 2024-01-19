/* eslint-disable @next/next/no-img-element */
"use client";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import Leftside from "../components/left-side";
import Mainside from "../components/main-side";
import { useState } from "react";

export default function Home() {

const [genresId, setGenresId] = useState("")


  return (
    
    
    <>
      
      <div className="flex">
        <div className="w-1/5 pl-6">
          <Leftside setGenresId={setGenresId} />
        </div>
        <div className="w-4/5">
          <Mainside genresId={genresId} />
        </div>
      </div>
    </>
  );
}
