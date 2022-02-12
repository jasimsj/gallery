import {
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { Box, Grid } from "@mui/material";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import TileCard from "./TileCard";
import {
  ContentCopy,
  ThumbDown,
  ThumbDownOutlined,
  ThumbUp,
  ThumbUpOutlined,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "./AppContext";

const WatchVideo = () => {
  const [videoData, setVideoData] = useState();
  const [like, setLike] = useState(true);
  const { id } = useParams();
  const ref = React.useRef(null);
  const { videos, setIsId } = useContext(AppContext);

  useEffect(() => {
    const response = videos && videos.find((video) => video.id === Number(id));
    setVideoData(response);
    if (id) setIsId(true);
    else setIsId(false);
  }, [id, setIsId, videos]);

  const onlikeClick = () => {
    setLike(!like);
    like
      ? toast.error("You Disliked this Video!", { position: "bottom-right" })
      : toast.success("You liked this Video!", { position: "bottom-right" });
  };

  const onShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("link copied!", { position: "bottom-right" });
  };

  if (!videoData)
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
    <Card className="watch-card">
      <Grid container spacing={2}>
        <Grid item lg={8} md={12}>
          <CardActionArea>
            <ShakaPlayer
              ref={ref}
              autoPlay
              src={videoData.video_files[0].link}
              className="media-card"
            />
          </CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {videoData && videoData.id}
            </Typography>
            <div
              className="reuse-flex"
              style={{ justifyContent: "space-between" }}
            >
              <Typography variant="body2" color="text.secondary">
                156788 views &nbsp;&nbsp;&nbsp;&nbsp;
                {new Date().toLocaleDateString()}
              </Typography>
              <div className="reuse-flex">
                <div className="reuse-flex">
                  <IconButton onClick={onlikeClick} disabled={like}>
                    {like ? <ThumbUp /> : <ThumbUpOutlined />}
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    134k
                  </Typography>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="reuse-flex">
                  <IconButton onClick={onlikeClick} disabled={!like}>
                    {like ? <ThumbDownOutlined /> : <ThumbDown />}
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    2k
                  </Typography>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="reuse-flex">
                  <IconButton onClick={onShareClick}>
                    <ContentCopy />
                  </IconButton>
                  <Typography variant="h6" color="text.secondary">
                    Share
                  </Typography>
                </div>
              </div>
            </div>
            <Typography variant="body2" color="text.secondary">
              {videoData && videoData.description}
            </Typography>
            <br />
            <br />
          </CardContent>
        </Grid>

        <Grid item lg={4} md={12}>
          <Typography variant="h6" color="text.secondary">
            Continue Watching
          </Typography>
          <br />
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {videos
                .filter((item) => item.id !== Number(id))
                .map((video) => (
                  <Grid item lg={12} key={video.id}>
                    <TileCard
                      id={video.id}
                      imgLink={`${video.image}?w=164&h=164&fit=crop&auto=format`}
                      title={video.id}
                      description={lorem}
                      sideView={true}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>

      <ToastContainer />
    </Card>
  );
};

export default WatchVideo;

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard";
