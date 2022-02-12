import React, { useContext, useEffect } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";
import TileCard from "./TileCard";
import AppContext from "./AppContext";
import { useParams } from "react-router-dom";

const GridItem = () => {
  const { videos, setIsId } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) setIsId(true);
    else setIsId(false);
  }, [id, setIsId]);

  if (!videos)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {videos &&
          videos.map((video) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={video.id}>
              <TileCard
                id={video.id}
                imgLink={`${video.image}?w=164&h=164&fit=crop&auto=format`}
                title={video.id}
                description={lorem}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default GridItem;

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
