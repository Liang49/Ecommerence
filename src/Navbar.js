import React, { useState } from "react";
import { AppBar, IconButton, StyledBadge, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Cart from "./Cart.js";
import Modal from "react-modal";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";

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

export default function Navbar({ title, total, cart, removeClick }) {
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
            helloffffff
          </Typography>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon onClick={openModal} />
            <Modal
              isOpen={isOpen}
              style={customStyles}
              onRequestClose={closeModal}
            >
              <div className="itemlist">
                {cart.map((item, index) => (
                  <div key={index}>
                    {item.id}
                    <ButtonUnstyled onClick={() => removeClick(item)}>
                      Remove from cart{" "}
                    </ButtonUnstyled>
                  </div>
                ))}
              </div>
            </Modal>
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
