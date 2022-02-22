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
  // settitle(title.concat(item.title))//

  const [title, settitle] = useState([]);
  const [cart, setCart] = useState([]);
  const [modaldata] = useState([]);

  const handleClick = (item) => {
    const incart = cart.find((quan) => quan.title === item.title);

    if (incart) {
      incart.quantity++;
    } else {
      incart.quantity = 0;
    }
    setCart([...cart, item]);
  };

  const removeClick = (remove) => {
    setCart(cart.filter((item) => item !== remove));
  };

  return (
    <div className="App">
      {fake[0].image}
      <Navbar
        title={settitle}
        total={title}
        cart={cart}
        removeClick={removeClick}
      />

      <div className="item">
        {fake.map((item, index) => (
          <div className="text" key={index}>
            <Card>
              <div className="box">
                <Typography gutterBottom variant="body2" component="h2">
                  <div>hello</div>
                  <div className="open">{item.title}</div>
                  <ButtonUnstyled onClick={() => handleClick(item)}>
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
