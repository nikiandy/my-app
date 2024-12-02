"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  // List of navigation items
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Customer", path: "/customer" },
    { label: "View Cart", path: "/view_cart" },
    { label: "Checkout", path: "/checkout" },
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <Typography
          variant="h6"
          style={{ flexGrow: 1, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          My Web App
        </Typography>
        {navItems.map((item) => (
          <Button
            key={item.label}
            color="inherit"
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
