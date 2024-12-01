import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Both email and password are required." },
      { status: 400 }
    );
  }

  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection("login");

    // Find the user in the database
    const user = await users.findOne({ email });

    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    // Return the account type (e.g., "manager" or "customer")
    return NextResponse.json({ accountType: user.accountType });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
