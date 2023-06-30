import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "이메일이 이미 존재합니다!"],
    required: [true, "이메일이 필요합니다!"],
  },
  email: {
    type: String,
    required: [true, "아이디가 필요합니다!"],
    match: [
      /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "아이디가 유효하지 않습니다. 8 - 20자의 영숫자를 포함해야합니다!",
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
