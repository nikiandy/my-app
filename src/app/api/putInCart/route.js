export async function GET(req, res) {
  console.log("in the putInCart api page");

  const { searchParams } = new URL(req.url);
  const pname = searchParams.get("pname");

  if (!pname) {
    return Response.json(
      { error: "Product name is required." },
      { status: 400 }
    );
  }

  // Connect to the MongoDB database
  const { MongoClient } = require("mongodb");
  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const productsCollection = db.collection("products");
    const cartCollection = db.collection("cart");

    // Fetch the product details from the products collection
    const product = await productsCollection.findOne({ pname });

    if (!product) {
      return Response.json({ error: "Product not found." }, { status: 404 });
    }

    // Check if the product is already in the cart for the user
    const existingCartItem = await cartCollection.findOne({
      pname: product.pname,
    });

    if (existingCartItem) {
      // If the product already exists in the cart, increment the quantity
      await cartCollection.updateOne(
        { _id: existingCartItem._id },
        { $inc: { quantity: 1 } }
      );
    } else {
      // Add the product to the cart with an initial quantity of 1
      const cartItem = {
        pname: product.pname,
        price: product.price,
        quantity: 1,
      };
      await cartCollection.insertOne(cartItem);
    }

    return Response.json({ message: "Product added to cart." });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  } finally {
    await client.close();
  }
}
