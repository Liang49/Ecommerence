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

  return (
    <div className="App">
      {fake[0].image}
      <Navbar />

      <div className="item">
        {fake.map((item) => (
          <div className="text">
            <Card>
              <Typography gutterBottom variant="h5" component="h2">
                <div className="box">
                  <h1>hello</h1>
                  {item.title}

                  <ButtonUnstyled>
                    <AddIcon />
                    Add to Cart
                  </ButtonUnstyled>
                </div>
              </Typography>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hello(props) {
  return <h1>Hello</h1>;
}

class Hello2 extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
