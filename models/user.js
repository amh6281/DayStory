import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "이메일이 이미 존재합니다!"],
    required: [true, "이메일이 필요합니다!"],
  },
  username: {
    type: String,
    required: [true, "아이디가 필요합니다!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
