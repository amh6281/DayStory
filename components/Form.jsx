import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Story</span>
      </h1>
      <p className="desc text-left max-w-md">
        하루 이야기는 오늘 하루 다짐 혹은 오늘 있었던 당신만의 따스한 이야기를
        짧게 기록하는 플랫폼입니다.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            하루 이야기
          </span>
          <textarea
            value={post.story}
            onChange={(e) => setPost({ ...post, story: e.target.value })}
            placeholder="오늘 하루 다짐 혹은 겪었던 경험을 기록해주세요."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            태그 {` `}
            <span className="font-normal">(#일기, #아침, #다짐, #저녁)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            type="text"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            취소
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : "기록"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
