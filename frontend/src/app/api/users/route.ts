import { api } from "@/app/lib/api";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

export async function GET() {
  console.log(`API_BASE_URL: ${api.defaults.baseURL}`);

  const response = await api.get("/user");
  return NextResponse.json(response.data);
}

export async function POST() {
  const fakeUser = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    age: faker.number.int({ min: 18, max: 65 }),
  };

  const response = await api.post("/user", fakeUser);
  return NextResponse.json(response.data);
}
