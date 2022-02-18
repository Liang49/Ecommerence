import "./styles.css";
import React from "react";
import { Card, Typography } from "@material-ui/core";
import Navbar from "./Navbar.js";
import fake from "./fake.json";
import AddIcon from "@mui/icons-material/Add";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export default function App() {
  return (
    <div className="App">
      {fake[0].title}

      <Navbar />

      <div className="item">
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
            <h1>hello</h1>
            <h1>hello</h1>
            <ButtonUnstyled>
              <AddIcon />
              Add to Cart
            </ButtonUnstyled>
          </Typography>
        </Card>
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
            <h1>hello</h1>
          </Typography>
        </Card>
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
            <h1>hello</h1>
          </Typography>
        </Card>
        <Card>
          <Typography gutterBottom variant="h5" component="h2">
            <h1>hello</h1>
          </Typography>
        </Card>
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
