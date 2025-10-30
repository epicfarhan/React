import Feedbackstats from "./Feedbackstats";
function Header({ data }) {
  return (
    <>
      <div className="text-center text-[#EE99C2] font-bold pt-5 pb-20">
        <h1 className="text-[20px]">Feedback app</h1>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <img
            src="cheesecake.jpg"
            alt="product-image"
            className="w-[500px] m-auto block rounded-4xl"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-[90px] leading-[90px] font-bold text-[#0C359E]">
            Orange glaze
            <br />
            cheesecake.
          </h1>
          <p className="w-[462px] leading-[24px] pt-[18px] pb-[18px] text-[black]">
            A bright, vibrant, and incredibly smooth dessert that brings
            together the rich, creamy texture of a classic cheesecake with the
            refreshing zest of citrus.
          </p>
          <h2 className="text-[30px] text-[#FF3F7F] font-bold">৳ 400</h2>
          <Feedbackstats data={data} />
        </div>
      </div>
    </>
  );
}

export default Header;
