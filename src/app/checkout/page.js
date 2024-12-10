"use client";

import NavBar from "@/components/NavBar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleConfirmOrder = async () => {
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "customer@example.com" }), // Replace with the customer's email
      });

      if (!response.ok) {
        const { error } = await response.json();
        setError(error || "Failed to place the order.");
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/customer"); // Redirect to the customer page
      }, 3000);
    } catch (err) {
      setError("An error occurred while placing the order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5", // Light background color
        color: "#333333", // Darker text color
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <NavBar />
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "#ffffff", // White container background
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          gutterBottom
          style={{ color: "#333333" }} // Darker heading color
        >
          Checkout
        </Typography>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          style={{ color: "#555555" }} // Slightly darker text
        >
          Confirm your order to finalize the purchase and receive a confirmation
          email.
        </Typography>
        {error && (
          <Alert severity="error" style={{ marginTop: "20px" }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" style={{ marginTop: "20px" }}>
            Order placed successfully! Redirecting to your dashboard...
          </Alert>
        )}
        {loading ? (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <CircularProgress />
            <Typography
              variant="body2"
              style={{ marginTop: "10px", color: "#555555" }}
            >
              Placing your order...
            </Typography>
          </div>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleConfirmOrder}
          >
            Confirm Order
          </Button>
        )}
      </Container>
    </div>
  );
}
