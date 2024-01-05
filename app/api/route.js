import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ time: new Date().toLocaleString() });
}

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);

    const message = `Name:${name}, Email:${email}, Password:${password} are registereted user infos.`;

    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 },
    );
  }
}
