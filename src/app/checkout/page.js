"use client";

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
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Checkout
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
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
          <Typography variant="body2" style={{ marginTop: "10px" }}>
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
  );
}
