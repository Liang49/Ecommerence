import "./styles.css";
import React, { useState } from "react";
import { Card, Typography } from "@material-ui/core";
import Navbar from "./Navbar.js";
import fake from "./fake.json";
export default function App() {
  // const hello = fake.map((item) => <div>{item.title}</div>); //
  // settitle(title.concat(item.title))//

  const [title, settitle] = useState([]);
  const [cart, setCart] = useState([]);
  const handleClick = (item) => {
    let incart = cart.find((quan) => quan.title === item.title);
    let newcart = [...cart];
    if (incart) {
      incart.quantity++;
    } else {
      incart = {
        ...item,
        quantity: 1
      };

      newcart.push(incart);
    }
    setCart(newcart);
  };

  const removeClick = (remove) => {
    setCart(cart.filter((item) => item !== remove));
  };

  const increase = (item) => {
    setCart((cart) =>
      cart.map((things) =>
        item === things
          ? {
              ...things,
              quantity: item.quantity + (item.quantity < 100 ? 1 : 0)
            }
          : things
      )
    );
  };

  const decrease = (item) => {
    setCart((cart) =>
      cart.map((things) =>
        item === things
          ? {
              ...things,
              quantity: item.quantity - (item.quantity > 1 ? 1 : 0)
            }
          : things
      )
    );
  };
  return (
    <div className="App">
      <Navbar
        title={settitle}
        total={title}
        cart={cart}
        removeClick={removeClick}
        increase={increase}
        decrease={decrease}
      />

      <div className="item">
        {fake.map((item, index) => (
          <div className="text" key={index}>
            <Card>
              <div className="box">
                <Typography gutterBottom variant="body2" component="h2">
                  <img
                    src={item.image}
                    height={150}
                    width={100}
                    alt="missing"
                  />

                  <div className="open">{item.title}</div>
                  <div className="price">{item.price}$</div>
                  <button
                    className="addtocart"
                    onClick={() => handleClick(item)}
                  >
                    Add to Cart
                  </button>
                </Typography>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
