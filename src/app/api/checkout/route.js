import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { error: "Customer email is required." },
      { status: 400 }
    );
  }

  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    const db = client.db(dbName);
    const cart = await db.collection("cart").find({}).toArray();

    if (cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty. Cannot place an order." },
        { status: 400 }
      );
    }

    const totalPrice = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Add the order to the orders collection
    const orders = db.collection("orders");
    const order = {
      cart,
      totalPrice,
      email,
      status: "Pending",
      createdAt: new Date(),
    };
    await orders.insertOne(order);

    // Clear the cart after placing the order
    await db.collection("cart").deleteMany({});

    // Send a confirmation email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Order Confirmation",
      text: `Thank you for your order! Your total is €${totalPrice.toFixed(
        2
      )}. Your order is being processed.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("Error during checkout:", error);
    return NextResponse.json(
      { error: "Failed to place the order." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
