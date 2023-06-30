import { Schema, model, models } from "mongoose";

const StorySchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  story: {
    type: String,
    required: [true, "이야기가 필요합니다."],
  },
  tag: {
    type: String,
    required: [true, "태그가 필요합니다."],
  },
});

const Story = models.Story || model("Story", StorySchema);

export default Story;
