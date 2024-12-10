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
import NavBar from "@/components/NavBar";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    acc_type: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Validation Functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s'-]{3,25}$/; // Allow letters, spaces, hyphens, apostrophes
    return nameRegex.test(name);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/;
    return passwordRegex.test(password);
  };

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

    // Validation checks
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.acc_type
    ) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    if (!validateName(formData.name)) {
      setError(
        "Name must be 3-25 characters and contain only letters, spaces, hyphens, or apostrophes."
      );
      return;
    }

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be 8-40 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    try {
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
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        marginTop: "50px",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Register
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
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
          variant="outlined"
          inputProps={{ maxLength: 35 }}
          sx={{ backgroundColor: "#f9f9f9" }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ maxLength: 50 }} // Maximum length enforced
          sx={{ backgroundColor: "#f9f9f9" }}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          inputProps={{ maxLength: 40 }} // Maximum length enforced
          sx={{ backgroundColor: "#f9f9f9" }}
        />
        <TextField
          label="Account Type"
          name="acc_type"
          select
          value={formData.acc_type}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          sx={{ backgroundColor: "#f9f9f9" }}
        >
          <MenuItem value="manager">Manager</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
        </TextField>
        {error && (
          <Alert severity="error" sx={{ marginTop: "10px" }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ marginTop: "10px" }}>
            Registration successful! You can now log in.
          </Alert>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            padding: "10px",
            fontWeight: "bold",
            backgroundColor: "#007BFF",
            "&:hover": {
              backgroundColor: "#0056b3",
            },
          }}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{
            padding: "10px",
            fontWeight: "bold",
            borderColor: "#6c757d",
            color: "#6c757d",
            "&:hover": {
              borderColor: "#5a6268",
              color: "#5a6268",
            },
            marginTop: "10px",
          }}
          onClick={handleLoginRedirect}
        >
          Go to Login
        </Button>
      </Box>
    </Container>
  );
}
