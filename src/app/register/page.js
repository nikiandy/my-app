"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acc_type: "", // New field for account type
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
    setSuccess(false);

    // Perform form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.acc_type
    ) {
      setError("All fields are required.");
      return;
    }

    try {
      // Send form data to the backend
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { error } = await response.json();
        setError(error || "Registration failed.");
        return;
      }

      // Clear form and show success message
      setFormData({
        name: "",
        email: "",
        password: "",
        acc_type: "",
      });
      setSuccess(true);
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Register
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
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
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
        <TextField
          label="Account Type"
          name="acc_type"
          select
          value={formData.acc_type}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
        </TextField>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">
            Registration successful! You can now log in.
          </Alert>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          style={{ marginTop: "10px" }}
          onClick={handleLoginRedirect}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
}
