import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        하루 이야기
        <br className="max-md:hidden" />
        <span className="orange_gradient">Daystory</span>
      </h1>
      <p className="desc text-center">
        하루 이야기는 오늘 하루 다짐 혹은 오늘 있었던 당신만의 따스한 이야기를
        짧게 기록하는 플랫폼입니다.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
