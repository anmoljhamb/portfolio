"use client";

const Loading = () => {
  return (
    <div className="w-[100%] z-10 h-[100%] bg-dark flex justify-center items-center">
      <div className="relative w-28 h-28">
        <div className="absolute inset-0 border-[6px] border-white border-t-transparent rounded-full animate-spin" />
        <div className="absolute inset-[6px] border-[6px] border-[#f05454] border-b-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
