import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import sanitizeHtml from "sanitize-html";

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Both email and password are required." },
      { status: 400 }
    );
  }

  if (email.length < 10 || email.length > 50) {
    return NextResponse.json(
      { error: "Email must be between 10 and 50 characters." },
      { status: 400 }
    );
  }

  if (password.length < 8 || password.length > 40) {
    return NextResponse.json(
      { error: "Password must be between 8 and 40 characters." },
      { status: 400 }
    );
  }

  const sanitizedEmail = sanitizeHtml(email, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();

  const url = process.env.DB_ADDRESS;
  const client = new MongoClient(url);
  const dbName = "app";

  try {
    await client.connect();
    const db = client.db(dbName);
    const users = db.collection("login");

    const user = await users.findOne({ email: sanitizedEmail });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({ accountType: user.acc_type });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
