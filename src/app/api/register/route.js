import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import validator from "email-validator";
import sanitizeHtml from "sanitize-html";

export async function POST(req) {
  const { name, email, password, acc_type } = await req.json();

  if (!name || !email || !password || !acc_type) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  if (!validator.validate(email)) {
    return NextResponse.json(
      { error: "Invalid email format." },
      { status: 400 }
    );
  }

  if (name.length < 3 || name.length > 25) {
    return NextResponse.json(
      { error: "Name must be between 3 and 25 characters." },
      { status: 400 }
    );
  }

  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(name)) {
    return NextResponse.json(
      {
        error:
          "Name must contain only letters, spaces, hyphens, or apostrophes.",
      },
      { status: 400 }
    );
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,40}$/;
  if (!passwordRegex.test(password)) {
    return NextResponse.json(
      { error: "Password must meet complexity requirements." },
      { status: 400 }
    );
  }

  const sanitizedEmail = sanitizeHtml(email, {
    allowedTags: [],
    allowedAttributes: {},
  }).trim();
  const sanitizedName = sanitizeHtml(name, {
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

    const existingUser = await users.findOne({ email: sanitizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists." },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await users.insertOne({
      name: sanitizedName,
      email: sanitizedEmail,
      password: hashedPassword,
      acc_type,
    });

    return NextResponse.json({ message: "User registered successfully." });
  } catch {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
