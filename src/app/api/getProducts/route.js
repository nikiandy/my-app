export async function GET(req) {
  console.log("In the getProducts API route");

  const { MongoClient } = require("mongodb");
  const url = process.env.DB_ADDRESS; // Ensure this environment variable is set in Vercel
  const client = new MongoClient(url);
  const dbName = "app"; // Name of your database

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected successfully to MongoDB server");

    // Access the database and collection
    const db = client.db(dbName);
    const collection = db.collection("products");

    // Query the collection
    const products = await collection.find({}).toArray();
    console.log("Found products:", products);

    // Return the products as a JSON response
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in getProducts API:", error);

    // Return an error response
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    // Ensure the client is closed even if an error occurs
    await client.close();
  }
}
