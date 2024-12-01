import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

export async function GET() {
  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    const db = client.db(dbName);
    const cart = await db.collection("cart").find({}).toArray();
    return NextResponse.json({ cart });
  } finally {
    await client.close();
  }
}

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const productId = searchParams.get("productId");

  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    const db = client.db(dbName);
    const cart = db.collection("cart");

    if (action === "increase") {
      await cart.updateOne(
        { _id: new ObjectId(productId) },
        { $inc: { quantity: 1 } }
      );
    } else if (action === "decrease") {
      await cart.updateOne(
        { _id: new ObjectId(productId) },
        { $inc: { quantity: -1 } }
      );
    } else if (action === "delete") {
      await cart.deleteOne({ _id: new ObjectId(productId) });
    }

    const updatedCart = await cart.find({}).toArray();
    return NextResponse.json({ cart: updatedCart });
  } finally {
    await client.close();
  }
}
