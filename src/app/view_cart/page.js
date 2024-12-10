"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import NavBar from "@/components/NavBar";

export default function ViewCartPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  // Fetch cart data from the API
  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => {
        const validatedCart = data.cart.map((item) => ({
          ...item,
          price: parseFloat(item.price) || 0, // Convert price to number
          quantity: item.quantity || 0,
        }));
        setCart(validatedCart);
        calculateTotal(validatedCart);
      })
      .catch((error) => console.error("Error fetching cart:", error));
  }, []);

  // Calculate total price
  const calculateTotal = (cart) => {
    const total = cart.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    );
    setTotalPrice(total);
  };

  // Increase item quantity
  const increaseQuantity = (productId) => {
    updateCartItem(productId, "increase");
  };

  // Decrease item quantity
  const decreaseQuantity = (productId) => {
    updateCartItem(productId, "decrease");
  };

  // Delete item from cart
  const deleteItem = (productId) => {
    updateCartItem(productId, "delete");
  };

  // Update cart item via API
  const updateCartItem = (productId, action) => {
    fetch(`/api/cart?action=${action}&productId=${productId}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        const validatedCart = data.cart.map((item) => ({
          ...item,
          price: parseFloat(item.price) || 0,
          quantity: item.quantity || 0,
        }));
        setCart(validatedCart);
        calculateTotal(validatedCart);
      })
      .catch((error) => console.error("Error updating cart:", error));
  };

  // Checkout
  const handleCheckout = () => {
    router.push("/checkout");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Product</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Price</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Quantity</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Actions</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Subtotal</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.pname || "Unknown Product"}</TableCell>
                    <TableCell>€{parseFloat(item.price).toFixed(2)}</TableCell>
                    <TableCell>{item.quantity || 0}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => increaseQuantity(item.id)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton
                        onClick={() =>
                          item.quantity > 1
                            ? decreaseQuantity(item.id)
                            : deleteItem(item.id)
                        }
                      >
                        <RemoveIcon />
                      </IconButton>
                      <IconButton
                        onClick={() => deleteItem(item.id)}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      €{(parseFloat(item.price) * item.quantity).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography
            variant="h6"
            align="right"
            style={{ marginTop: "20px", marginRight: "10px" }}
          >
            Total: €{totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
}
