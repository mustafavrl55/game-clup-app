/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

import { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

import { Dropdown } from "primereact/dropdown";

import Game from "./games";

const Mainside = ({ genresId }) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [items, setItems] = useState([]);
  const [platforms, setplatforms] = useState([]);
  const [games, setGames] = useState(null);
  const [loading, setLoading] = useState(true);
  const [Order, setOrder] = useState("");

  function buildUrl(baseUrl, queryParams) {
    const url = new URL(baseUrl);

    // queryParams nesnesini dönerek URL'ye query parametrelerini ekleyin
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, value);
      }
    }

    return url.toString();
  }

  useEffect(() => {
    const fetchData = async () => {
      const URL = buildUrl(
        "https://api.rawg.io/api/games?key=1c399f4b116845f1981f952c1bdb0772",
        {
          parent_platforms: selectedPlatform,
          ordering: Order,
          genres: genresId,
        }
      );

      try {
        const response = await fetch(URL);
        const response_platforms = await fetch(
          "https://api.rawg.io/api/platforms?key=1c399f4b116845f1981f952c1bdb0772"
        );
        const res = await response.json();
        console.log(res);
        const res_platform = await response_platforms.json();
        setGames(res.results);
        setplatforms(res_platform.results);
      } catch (error) {
        console.error("API isteği başarısız:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedPlatform, Order, genresId ]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const search = (event) => {
    let _items = [...Array(10).keys()];
    setItems(
      event.query
        ? [...Array(10).keys()].map((item) => event.query + "-" + item)
        : _items
    );
  };

  const myArray = [
    {
      name: "Relevance",
      value: "",
    },
    {
      name: "Release Date",
      value: "release",
    },
    {
      name: "Date Added",
      value: "added",
    },
    {
      name: "Name",
      value: "name",
    },
    {
      name: "Rating",
      value: "rating",
    },
    {
      name: "Popularity",
      value: "metacritic",
    },
  ];

  return (
    <div>
      <h2 className="text-5xl  font-semibold mb-8">Games</h2>
      <div className="flex gap-4">
        <div className="card flex justify-content-center bg-slate-600 rounded-2xl">
          <Dropdown
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.value)}
            options={platforms}
            optionLabel="name"
            optionValue="id"
            placeholder="Select a platform  "
            className="w-full md:w-14rem"
          />
        </div>
        <div className="card flex justify-content-center bg-slate-600 rounded-2xl">
          <Dropdown
            value={Order}
            onChange={(e) => setOrder(e.value)}
            options={myArray}
            optionLabel="name"
            optionValue="value"
            placeholder="Order By: Relevance"
            className="w-full md:w-14rem"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        {games?.map((game) => (
          <Game game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
};

export default Mainside;
