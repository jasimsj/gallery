import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const AppProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [isId, setIsId] = useState(false);
  useEffect(() => {
    (async () => {
      // const API_KEY ="25584246-6e15ef31cb33a1ad1d5b9f46c";
      // const data = await fetch(`https://pixabay.com/api/videos/?key=${API_KEY}`)
      const data = await fetch(`https://api.pexels.com/videos/popular`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization:
            "563492ad6f91700001000001039be1c8320f4208b1562d0a03314ecb",
        },
      });
      const response = await data.json();
      setVideos(response.videos);
    })();
  }, []);

  return (
    <AppContext.Provider
      value={{
        videos,
        setIsId,
        isId,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
