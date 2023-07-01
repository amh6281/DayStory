import { connectToDB } from "@utils/database";
import Story from "@models/story";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const stories = await Story.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(stories), { status: 200 });
  } catch (err) {
    return new Response("이야기를 가져오는데 실패하였습니다.", { status: 500 });
  }
};
