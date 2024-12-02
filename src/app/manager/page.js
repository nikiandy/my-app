"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "@/components/NavBar";

export default function ManagerDashboard() {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch order data from the API
  useEffect(() => {
    fetch("/api/getOrders")
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container
        maxWidth="md"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <CircularProgress />
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Loading orders...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Manager Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        View and manage customer orders.
      </Typography>
      {orders && orders.length > 0 ? (
        <TableContainer component={Paper} style={{ marginTop: "30px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Order ID</strong>
                </TableCell>
                <TableCell>
                  <strong>Customer Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Items</strong>
                </TableCell>
                <TableCell>
                  <strong>Total Price</strong>
                </TableCell>
                <TableCell>
                  <strong>Status</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.name} (x{item.quantity})
                      </div>
                    ))}
                  </TableCell>
                  <TableCell>€{order.totalPrice.toFixed(2)}</TableCell>
                  <TableCell>{order.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          variant="h6"
          style={{ marginTop: "20px", textAlign: "center" }}
        >
          No orders found.
        </Typography>
      )}
    </Container>
  );
}
