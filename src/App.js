import "./styles.css";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-ui/core";
import Navbar from "./Navbar.js";
import fake from "./fake.json";
import AddIcon from "@mui/icons-material/Add";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
export default function App() {
  const [image, newimage] = useState([]);
  // const hello = fake.map((item) => <div>{item.title}</div>); //
  const [title, settitle] = useState([]);
  const [modaldata] = useState([]);
  const handleClick = (title) => {
    settitle(title);
    console.log(settitle);
  };
  console.log(settitle);
  return (
    <div className="App">
      {fake[0].image}
      <Navbar title={settitle} total={title} data={modaldata} />

      <div className="item">
        {fake.map((item) => (
          <div className="text">
            <Card>
              <div className="box">
                <Typography gutterBottom variant="body2" component="h2">
                  <h1>hello</h1>
                  <div className="open">{item.title}</div>
                  <ButtonUnstyled
                    onClick={() => settitle(title.concat(item.title))}
                  >
                    <AddIcon />
                    Add to Cart
                  </ButtonUnstyled>
                </Typography>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
