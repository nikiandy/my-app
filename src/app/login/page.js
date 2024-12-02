"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import NavBar from "@/components/NavBar";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Check if all fields are filled
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }

    try {
      // Send login request to API
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setError(error || "Invalid email or password.");
        return;
      }

      const { accountType } = await response.json();

      // Redirect based on account type
      if (accountType === "manager") {
        router.push("/manager");
      } else if (accountType === "customer") {
        router.push("/customer");
      } else {
        setError("Unknown account type.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
        />
        {error && <Alert severity="error">{error}</Alert>}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  );
}
