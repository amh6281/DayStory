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

// PATCH
export const PATCH = async (req, { params }) => {
  const { story, tag } = await request.json();

  try {
    await connectToDB();

    const existingStory = await Story.findById(params.id);

    if (!existingStory)
      return new Response("이야기를 찾을 수 없습니다.", { status: 404 });

    existingStory.story = story;
    existingStory.tag = tag;

    await existingStory.save();

    return new Response(JSON.stringify(existingStory), { status: 200 });
  } catch (err) {
    return new Response("이야기 업데이트에 실패하였습니다.", { status: 500 });
  }
};

// DELETE
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();

    await Story.findByIdAndRemove(params.id);

    return new Response("이야기를 삭제하였습니다.", { status: 200 });
  } catch (err) {
    return new Response("이야기 삭제에 실패하였습니다.", { status: 500 });
  }
};
