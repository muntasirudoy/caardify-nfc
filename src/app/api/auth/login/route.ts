import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { api } from "../../../../lib/api-fetch";

const LoginRequestSchema = z.object({
  email_or_phone: z.string(),
  password: z.string(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  const parsedBody = LoginRequestSchema.safeParse(body);

  if (!parsedBody.success) {
    return NextResponse.json(
      {
        message: "Invalid input",
        statausCode: 400,
        success: false,
      },
      { status: 400 }
    );
  }

  const response = await api.post("auth/login", {
    email_or_phone: parsedBody.data.email_or_phone,
    password: parsedBody.data.password,
  });

  if (response.statusCode !== 200) {
    return NextResponse.json(
      {
        message: "Invalid credentials",
        statausCode: 400,
        success: false,
      },
      { status: 400 }
    );
  }

  await api.setAuthCookieValue(response?.data?.access_token);

  const user = await api.get("auth/verify-token");

  const userObject = {
    ...user.data,
  };

  const userRole = user?.data?.role?.name;

  if (userRole === "Customer") {
    userObject["role"] = "customer";
  } else {
    userObject["role"] = "admin";
  }

  await api.setUserCookie(JSON.stringify(userObject));

  return NextResponse.json({
    user: userObject,
  });
}
