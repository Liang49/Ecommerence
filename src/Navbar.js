import React from "react";
import { AppBar, IconButton, StyledBadge, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1 }}>
            helloffffff
          </Typography>
          <Badge badgeContent={2} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Toolbar>
      </AppBar>
    </div>
  );
}
