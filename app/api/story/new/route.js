import { connectToDB } from "@utils/database";
import Story from "@models/story";

export const POST = async (req) => {
  const { userId, story, tag } = await req.json();

  try {
    await connectToDB();
    const newStory = new Story({ creator: userId, story, tag });

    await newStory.save();
    return new Response(JSON.stringify(newStory), { status: 201 });
  } catch (err) {
    return new Response("이야기 기록에 실패하였습니다.", { status: 500 });
  }
};
