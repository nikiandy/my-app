"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { useState, useEffect } from "react";

export default function CustomerPage() {
  const [products, setProducts] = useState(null);

  // Fetch products from the database
  useEffect(() => {
    fetch("/api/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // Function for putting items into the shopping cart
  function putInCart(pname) {
    console.log("putting in cart: " + pname);
    fetch("/api/putInCart?pname=" + pname);
  }

  if (!products) return <Typography variant="h5">Loading...</Typography>;

  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md">
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Customer Products
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom>
          Browse and add your favorite products to the cart!
        </Typography>
        <div style={{ display: "grid", gap: "20px", marginTop: "20px" }}>
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <Typography variant="h6">{product.pname}</Typography>
                <Typography variant="body1">Price: €{product.price}</Typography>
                <Typography variant="body1">
                  Description: {product.pdesc}
                </Typography>
              </div>
              <Button
                onClick={() => putInCart(product.pname)}
                variant="outlined"
                color="primary"
              >
                Add to cart
              </Button>
            </div>
          ))}
        </div>
        <br></br>
      </Container>
    </ThemeProvider>
  );
}
