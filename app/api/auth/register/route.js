import User from "@models/user";
import { connectToDB } from "@utils/database";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connectToDB();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new Response("계정이 생성되었습니다.", { status: 201 });
  } catch (err) {
    return new Response(err.message, {
      status: 500,
    });
  }
};
