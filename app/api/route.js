import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ time: new Date().toLocaleString() });
}

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const message = `Name:${name}, Email:${email}, Password:${password} are user infos.`;

    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred." },
      { status: 500 },
    );
  }
}
