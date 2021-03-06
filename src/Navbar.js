import React, { useState } from "react";
import { AppBar, IconButton, StyledBadge, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default function Navbar({
  title,
  total,
  cart,
  removeClick,
  quantity,
  increase,
  decrease
}) {
  const [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            Shop at my LZ
          </Typography>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon onClick={openModal} />
            <Modal
              isOpen={isOpen}
              style={customStyles}
              onRequestClose={closeModal}
            >
              <div className="itemlist">
                <h1>Item in cart</h1>
                {cart.map((item, index) => (
                  <div key={index}>
                    <div className="top">
                      <img src={item.image} width={50} alt="missing" />
                      <button
                        className="remove"
                        onClick={() => removeClick(item)}
                      >
                        x
                      </button>
                    </div>
                    <div className="nameof" style={{ fontSize: 20 }}>
                      {item.title}
                    </div>
                    <div style={{ fontWeight: "bold" }}>${item.price}</div>
                    <button
                      className="addsub"
                      onClick={() => {
                        decrease(item);
                      }}
                    >
                      -
                    </button>
                    <div className="boxbutton">{item.quantity}</div>
                    <button className="addsub" onClick={() => increase(item)}>
                      +
                    </button>
                  </div>
                ))}
              </div>

              <div className="checkout">
                {cart.length ? (
                  <div>
                    Total : ${" "}
                    {cart.reduce(
                      (total, item) => total + item.quantity * item.price,
                      0
                    )}
                    <button className="out">Check Out</button>
                  </div>
                ) : (
                  <i>You have not add anything in cart</i>
                )}
              </div>
            </Modal>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
