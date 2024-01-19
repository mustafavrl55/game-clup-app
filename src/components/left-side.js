/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Types from "./types";

const Leftside = ({setGenresId}) => {

    

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
  
    console.log(data)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://api.rawg.io/api/genres?key=1c399f4b116845f1981f952c1bdb0772");
          const res = await response.json();
          setData(res.results);
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
    <div>
      <div>
        <h2 className="text-3xl mb-2 font-semibold">Genres</h2>
        <ul>
          {data.map((genre) => (
            <Types genre={genre} key={genre.id} setGenresId={setGenresId}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leftside;
