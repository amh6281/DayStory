import { connectToDB } from "@utils/database";
import Story from "@models/story";

// GET (기존 Story 정보 fetch)
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
export const PATCH = async (request, { params }) => {
  const { story, tag } = await request.json();

  try {
    await connectToDB();

    const existingStory = await Story.findById(params.id);

    if (!existingStory)
      return new Response("이야기를 찾을 수 없습니다.", { status: 404 });

    existingStory.story = story;
    existingStory.tag = tag;

    await existingStory.save();

    return new Response("이야기 업데이트에 성공하였습니다.", { status: 200 });
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
