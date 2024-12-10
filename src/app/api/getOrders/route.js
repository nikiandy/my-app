// src/app/api/getOrders/route.js

import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function GET(request) {
  console.log("In the getOrders API route");

  // Get the database connection string from environment variables
  const url = process.env.DB_ADDRESS; // Ensure this is set in your environment variables
  const client = new MongoClient(url);
  const dbName = "app"; // Replace with your actual database name

  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected successfully to MongoDB server");

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection("orders"); // Ensure this collection exists

    // Fetch all orders
    const orders = await collection.find({}).toArray();
    console.log("Found orders:", orders);

    // Return the orders as JSON response
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}
