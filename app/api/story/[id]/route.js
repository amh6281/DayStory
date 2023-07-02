import { connectToDB } from "@utils/database";
import Story from "@models/story";

// GET
export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const story = await Story.findById(params.id).populate("creator");

    if (!story)
      return new Response("이야기를 찾을 수 없습니다.", { status: 404 });

    return new Response(JSON.stringify(story), { status: 200 });
  } catch (err) {
    return new Response("이야기를 가져오는데 실패하였습니다.", { status: 500 });
  }
};
