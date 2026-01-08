const Button = ({ btnName = "BtnName", path = "#" }) => {
  return (
    <>
      <a href={path}>
        <div className="relative group flex justify-center items-center hover:scale-105 hover:bg-white/90 duration-200 ease-in-out min-w-40 py-2.5 bg-white text-black border-none rounded-md overflow-hidden">
          <div className="z-10 group-hover:w-80 group-hover:h-80 rounded-full w-0 h-0 absolute top-6 group-hover:bottom-[50%] -translate-y-[50%] -left-6 group-hover:-left-6 bg-gray-500 duration-500 ease-in-out"></div>
          <span className="z-100 group-hover:text-white">{btnName}</span>
        </div>
      </a>
    </>
  );
};

export default Button;
