/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

const Types = ({ genre, setGenresId }) => {


  return (
    <li className="py-1  flex cursor-pointer" key={genre.id} onClick={() => setGenresId(genre.id)}>
      <img src={genre.image_background} alt="" className="w-10 mr-4 rounded-lg " />
      <span className="">{genre.name}</span>
    </li>
  );
};

export default Types;
