/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import { dividerClasses } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Details = ({ params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [screenshots, setScreenshots] = useState()
console.log(screenshots)
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.rawg.io/api/games/${params.id}?key=1c399f4b116845f1981f952c1bdb0772`
        );
        const res = await response.json();
        setData(res);

        const screen_shot_response = await fetch(
          `https://api.rawg.io/api/games/${res.slug}/screenshots?key=1c399f4b116845f1981f952c1bdb0772`
        );
        
        
        const reses = await screen_shot_response.json();
        setScreenshots(reses.results)
      } catch (error) {
        console.error("API isteği başarısız:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  
  
  
  return (
    <div className="flex">
      <div className="w-1/2 px-10 pt-10">
        <h1 className="text-5xl font-bold mb-6">{data.name_original}</h1>
        <p className="line-clamp-3"> {data.description_raw} </p>
        <div className="px-6">
          <div className="flex justify-between mt-6  ">
            <div className="flex flex-col font-semibold">
              <h3 className="text-2xl text-gray-500">Platforms</h3>
              {data.parent_platforms.map((item) => (
                <span className="mt-4" key={item.id}>
                  {item.platform.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col font-semibold">
              <h3 className="text-2xl text-gray-500">MetaScore</h3>
              <span className="bg-slate-600 w-7 p-1 rounded-lg">
                {data.metacritic}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-6  ">
            <div className="flex flex-col font-semibold">
              <h3 className="text-2xl text-gray-500">Genres</h3>
              {data.genres.map((item) => (
                <span className="mt-4" key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col font-semibold">
              <h3 className="text-2xl text-gray-500">Publisher</h3>
              {data.publishers.map((item) => (
                <span className="mt-4" key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <video
          poster="https://media.rawg.io/media/movies/d8a/d8a61a3a12e52114afdbc28f2c813f5c.jpg"
          controls=""
          src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
        ></video>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-4 p-4">
          {screenshots.map((shot) => (
            <img src={shot.image} alt="" key={shot.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
