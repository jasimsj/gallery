import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

const TileCard = (props) => {
  const navigate = useNavigate();
  const onWatchClick = () => {
    navigate(`watch/${props.id}`);
  };
 
  return (
    <Card sx={{ boxShadow: 3 }}>
      {props.sideView ? (
        <Link to={`/watch/${props.id}`} className="link-style">
          <CardActionArea
            style={{
              display: "flex",
              alignItems: "self-start",
            }}
          >
            <CardMedia
              component="img"
              height="120"
              image={props.imgLink}
              alt=""
            />
            <CardContent style={{ textDecoration: "none" }}>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      ) : (
        <CardActionArea onClick={onWatchClick}>
          <CardMedia
            component="img"
            height="200"
            image={props.imgLink}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      )}
    </Card>
  );
};

export default TileCard;
